<template>
  <div>
    <ul class="attachment-dropdown-list m-0 py-1 px-0">
      <li class="attachment-dropdown-list__item mb-1" @click="handleComputerUpload">Computer</li>
      <li class="attachment-dropdown-list__item mb-1" disabled>Trello</li>
      <li class="attachment-dropdown-list__item mb-1" disabled>Google Drive</li>
      <li class="attachment-dropdown-list__item mb-1" disabled>Dropbox</li>
      <li class="attachment-dropdown-list__item mb-1" disabled>OneDrive</li>
    </ul>
    <hr class="dropdown-divider mx-2" />
    <div class="attachment-dropdown-list__attach px-2 mb-2">
      <p class="m-0 mb-1 fw-bold">Attach a link</p>
      <input type="text" disabled placeholder="Paste any link here..." class="form-control form-control-sm d-block mb-2" />
      <action-button disabled>Attach</action-button>
    </div>
    <input type="file" ref="fileInputComputer" class="invisible" @input="handleFileInputChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import { uploadTaskAttachmentService } from '@/services/task'

export default defineComponent({
  components: {
    ActionButton
  },
  inject: ['task', 'list', 'updateListTask'],
  methods: {
    handleComputerUpload () {
      this.$refs.fileInputComputer.click()
    },
    async handleFileInputChange (event: Event) {
      const target = event.target as HTMLInputElement
      const formData = new FormData()
      Object.values(target.files).forEach((file) => {
        formData.append('files', file)
      })
      const res = await uploadTaskAttachmentService(this.$route.params.boardId, this.list._id, this.task._id, formData)
      if (!res.error) {
        this.updateListTask(res.data)
        this.$emit('close')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.attachment-dropdown-list {
  list-style-type: none;
  &__item {
    cursor: pointer;
    padding: 6px 12px;
    color: var(--dark-clr-2);
    &:hover {
      color: #152745;
      background-color: #04060a14;
    }
  }
}
</style>
