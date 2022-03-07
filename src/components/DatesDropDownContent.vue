<template>
  <div class="date-picker-wrapper d-flex flex-column gap-2">
    <date-picker
      :modelValue="defaultDate"
      @update:modelValue="handleDefaultDateChange"
      :range="Array.isArray(defaultDate)"
      :inline="true"
      :month-change-on-scroll="false"
      :is24="false"
      :month-name-format="'long'"
      format="MM/d/Y"
      :auto-apply="true"
      :week-start="0">
      <template #calendar-header="{ index }">
        <div class="text-uppercase">
          {{ getDay(index) }}
        </div>
      </template>
    </date-picker>
    <div class="date-picker-wrapper__form">
      <p class="label mb-1" for="startdate">Start date</p>
      <div class="date-picker-wrapper__form__startdate d-flex gap-2 justify-content-start align-items-center mb-2">
        <input v-model="hasRange" disabled class="form-check-input" type="checkbox" id="startdate" />
        <input
          type="text"
          disabled
          :value="formatted.startDate"
          class="form-control form-control-sm"
          :class="{ isFocused: hasRange }" />
      </div>
      <p class="label mb-1" for="duedate">Due date</p>
      <div class="date-picker-wrapper__form__duedate d-flex gap-2 justify-content-start align-items-center">
        <input :disabled="true" :checked="dueDateCheckBox" class="form-check-input" type="checkbox" id="duedate" />
        <input
          :value="formatted.dueDate"
          type="text"
          ref="dueDateStart"
          class="form-control form-control-sm"
          :class="{ isFocused: dueDateCheckBox }" />
        <input
          :value="formatted.dueTime"
          type="text"
          class="form-control form-control-sm"
          :class="{ isFocused: dueDateCheckBox }" />
      </div>
      <button class="date-picker-wrapper__btn btn-primary-1 w-100 mt-3 rounded-1" @click="handleDateChange">
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { TaskDateType } from '@/types/entities'
import { defineComponent, PropType } from 'vue'
import DatePicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'

interface day {
  i: number
  d: string
}

export default defineComponent({
  props: {
    date: {
      type: Object as PropType<TaskDateType>,
      required: true,
      default: () => ({ startDate: '', dueDate: new Date() })
    }
  },
  components: {
    DatePicker
  },
  inject: ['task', 'list', 'updateListTask'],
  data () {
    return {
      defaultDate: new Date(),
      dueDateCheckBox: true,
      hasRange: true,
      days: [
        { i: 0, d: 'Sun' },
        { i: 1, d: 'Mon' },
        { i: 2, d: 'Tue' },
        { i: 3, d: 'Wed' },
        { i: 4, d: 'Thu' },
        { i: 5, d: 'Fri' },
        { i: 6, d: 'Sat`' }
      ]
    }
  },
  computed: {
    formatted () {
      const isArray = Array.isArray(this.defaultDate)
      return {
        startDate: new Intl.DateTimeFormat('en-US').format(isArray ? this.defaultDate[0] : new Date()),
        dueDate: new Intl.DateTimeFormat('en-US').format(isArray ? this.defaultDate[1] : this.defaultDate),
        dueTime: new Intl.DateTimeFormat('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }).format(
          isArray ? this.defaultDate[1] : this.defaultDate
        )
      }
    }
  },
  watch: {
    hasRange: {
      handler (v) {
        console.log('watch running !')
        if (v) this.defaultDate = [new Date(), new Date(this.date.dueDate)]
        // else this.defaultDate = new Date(this.date.dueDate)
      }
    }
  },
  mounted () {
    if (this.date.startDate) {
      this.hasRange = true
      this.defaultDate = [new Date(this.date.startDate), new Date(this.date.dueDate)]
    } else {
      this.hasRange = false
      if (this.date.dueDate) {
        this.defaultDate = new Date(this.date.dueDate)
      }
    }
  },
  methods: {
    handleDefaultDateChange (date: Array<Date> | Date) {
      this.defaultDate = date
    },
    getDay (day: number) {
      return this.days.find((d: day) => d.i === day).d
    },
    async handleDateChange () {
      let payload = {}
      if (this.hasRange) {
        payload = { date: { startDate: this.defaultDate[0], dueDate: this.defaultDate[1] } }
      } else {
        payload = { date: { dueDate: new Date(this.defaultDate) } }
      }
      this.$emit('dateChange', payload)
    }
  }
})
</script>

<style lang="scss">
.date-picker-wrapper {
  &__form {
    input {
      max-width: 90px;
      &.isFocused {
        border: none;
        box-shadow: inset 0 0 0 2px var(--primary-clr-5);
      }
    }
    p.label {
      font-size: var(--fs-xsss);
      font-weight: var(--fw-bold);
      color: var(--gray-clr-3);
    }
  }
}
.dp__main {
  .dp__cell_inner {
    width: 40px;
  }
  .dp__calendar_header_item {
    width: 40px;
  }
  .dp__menu {
    border: none;
    font-size: var(--fs-xss);
    justify-content: center;
    .dp__action_row {
      display: none;
    }
    .dp__active_date {
      background: var(--gray-clr-6);
      border: none;
    }
    .dp__today {
      border: none;
      color: rgb(0, 82, 204);
      border-radius: 0;
      border-bottom: 2px solid var(--primary-clr-2);
      font-weight: var(--fw-bold);
      &.dp__active_date {
        border: none;
        border-radius: 4px;
        color: var(--light-clr-1);
        &:hover {
          color: var(--light-clr-1);
        }
        &:active {
          color: #6b778c;
        }
      }
      &:hover {
        border: none;
        border-radius: 4px;
        color: rgb(107, 119, 140);
      }
      &:active,
      &:focus {
        color: rgb(107, 119, 140);
        border: none;
        border-radius: 4px;
      }
    }
    .dp__calendar_header {
      &_item {
        color: rgb(107, 119, 140);
        font-size: 11px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
