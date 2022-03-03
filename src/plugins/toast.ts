import { App, h } from 'vue'

export default {
  install: (app: App): void => {
    app.component('Toast', {
      props: {
        text: {
          type: String,
          default: ''
        },
        variant: {
          type: String,
          default: 'light'
        }
      },
      render: function () {
        return h(
          'div',
          {
            class: `toast show mb-1 bg-${this.$props.variant}`,
            role: 'alert',
            'aria-live': 'assertive',
            'aria-atomic': true,
            'data-bs-animation': true,
            'data-bs-autohide': true
          },

          h(
            'div',
            {
              class: 'toast-body d-flex align-items-center justify-content-between gap-2'
            },
            [
              h('span', {}, this.$props.text),
              h('button', {
                type: 'button',
                class: 'btn-close',
                'data-bs-dismiss': 'toast',
                'aria-label': 'close'
              })
            ]
          )
        )
      }
    })
  }
}
