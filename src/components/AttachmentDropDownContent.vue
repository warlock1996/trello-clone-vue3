<template>
  <div>
    <ul class="attachment-dropdown-list m-0 py-1 px-0">
      <li class="attachment-dropdown-list__item mb-1">Computer</li>
      <li class="attachment-dropdown-list__item mb-1">Trello</li>
      <li class="attachment-dropdown-list__item mb-1">Google Drive</li>
      <li class="attachment-dropdown-list__item mb-1">Dropbox</li>
      <li class="attachment-dropdown-list__item mb-1">OneDrive</li>
    </ul>
    <hr class="dropdown-divider mx-2" />
    <div class="attachment-dropdown-list__attach px-2 mb-2">
      <p class="m-0 mb-1 fw-bold">Attach a link</p>
      <input
        type="text"
        placeholder="Paste any link here..."
        class="form-control form-control-sm d-block mb-2"
      />
      <action-button>Attach</action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from '@/components/ActionButton.vue'

export default defineComponent({
  data () {
    return {}
  },
  components: {
    ActionButton
  }
})
</script>

<style lang="scss" scoped>
.attachment-dropdown-list {
  list-style-type: none;
  &__item {
    padding: 6px 12px;
    color: #091e42;
    &:hover {
      color: #152745;
      background-color: #04060a14;
    }
  }
}
</style>
