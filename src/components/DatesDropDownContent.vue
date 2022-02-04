<template>
  <div class="date-picker-wrapper d-flex flex-column gap-2">
    <date-picker
      v-model="date"
      :inline="true"
      :month-change-on-scroll="false"
      :is24="false"
      :month-name-format="'long'"
      :auto-apply="true"
      format="MM/d/Y"
      :week-start="0"
    >
      <template #calendar-header="{ index }">
        <div class="text-uppercase">
          {{ getDay(index) }}
        </div>
      </template>
    </date-picker>
    <div class="date-picker-wrapper__form">
      <p class="label mb-1" for="startdate">Start date</p>
      <div
        class="date-picker-wrapper__form__startdate d-flex gap-2 justify-content-start align-items-center mb-2"
      >
        <input
          v-model="startDateCheckBox"
          class="form-check-input"
          type="checkbox"
          id="startdate"
        />
        <input
          type="text"
          class="form-control form-control-sm"
          :class="{ isFocused: startDateCheckBox }"
        />
      </div>
      <p class="label mb-1" for="duedate">Due date</p>
      <div
        class="date-picker-wrapper__form__duedate d-flex gap-2 justify-content-start align-items-center"
      >
        <input
          v-model="dueDateCheckBox"
          class="form-check-input"
          type="checkbox"
          id="duedate"
        />
        <input
          v-model="dueDate"
          type="text"
          ref="dueDateStart"
          class="form-control form-control-sm"
          :class="{ isFocused: dueDateCheckBox }"
        />
        <input
          v-model="dueTime"
          type="text"
          class="form-control form-control-sm"
          :class="{ isFocused: dueDateCheckBox }"
        />
      </div>
      <button class="date-picker-wrapper__btn btn-primary-1 w-100 mt-3 rounded-1">
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
import DatePicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'

interface days {
  i: number;
  d: string;
}

export default defineComponent({
  components: {
    DatePicker
  },
  setup () {
    const days: Array<days> = [
      { i: 0, d: 'Sun' },
      { i: 1, d: 'Mon' },
      { i: 2, d: 'Tue' },
      { i: 3, d: 'Wed' },
      { i: 4, d: 'Thu' },
      { i: 5, d: 'Fri' },
      { i: 6, d: 'Sat`' }
    ]

    const date = ref(new Date())
    const dueTime = ref(new Date().toLocaleTimeString())
    const dueDate = ref('')
    const startDateCheckBox = ref(false)
    const dueDateCheckBox = ref(true)

    watchEffect(() => {
      dueDate.value = `${
        date.value.getMonth() + 1
      }/${date.value.getDate()}/${date.value.getFullYear()}`
      dueTime.value = date.value.toLocaleTimeString()
    })

    const getDay = (day: number) => {
      return days.find((d) => d.i === day).d
    }

    return {
      getDay,
      date,
      dueDate,
      dueTime,
      startDateCheckBox,
      dueDateCheckBox
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
        box-shadow: inset 0 0 0 2px #0079bf;
      }
    }
    p.label {
      font-size: 12px;
      font-weight: bold;
      color: #5e6c84;
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
    font-size: 14px;
    justify-content: center;
    .dp__active_date {
      background: rgb(66, 82, 110);
      border: none;
    }
    .dp__today {
      border: none;
      color: rgb(0, 82, 204);
      border-radius: 0;
      border-bottom: 2px solid rgb(0, 82, 204);
      font-weight: bold;
      &.dp__active_date {
        border: none;
        border-radius: 4px;
        color: #ffffff;
        &:hover {
          color: #ffffff;
        }
        &:active {
          color: rgb(107, 119, 140);
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
