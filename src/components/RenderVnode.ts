import { defineComponent } from 'vue'

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [Object, String], // objec 或者 string
      required: true
    }
  },
  render() {
    return this.vNode
  }
})

export default RenderVnode
