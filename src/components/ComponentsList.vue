<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { v4 as uuidv4 } from "uuid";
// import { message } from "ant-design-vue";
import LText from "../components/LText.vue";
// import StyledUploader from "../components/StyledUploader.vue";
// import { ComponentData } from "../store/editor";
// import { imageDefaultProps, TextComponentProps } from "../defaultProps";
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ["on-item-click"],
  name: "components-list",
  components: {
    LText,
  },
  setup(props, context) {
    const onItemClick = (data: any) => {
      context.emit("on-item-click", data);
    };
    return {
      onItemClick,
    };
  },
});
</script>

<style>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>