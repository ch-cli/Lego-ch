import { defineComponent } from 'vue'


// vnode类型
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
