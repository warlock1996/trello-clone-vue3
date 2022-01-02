import { reactive } from 'vue'

export interface MyStore {
  layout: unknown
}

const store : MyStore = reactive({
  layout: {}
})

export const useStore = () : MyStore => {
  return store
}
