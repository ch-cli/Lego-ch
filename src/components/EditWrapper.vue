<template>
  <div class="edit-wrapper" @click="onItemClick(id)" :class="{ active }">
    <slot></slot>
    <span @click="deleteComponent(id)">X</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["set-active", "deleteComponent"],
  setup(props, context) {
    const onItemClick = (id: string) => {
      context.emit("set-active", id);
    };
    const deleteComponent = (id: string) => {
      context.emit("deleteComponent", id);
    };

    return {
      onItemClick,
      deleteComponent,
    };
  },
});
</script>

<style>
.edit-wrapper {
  padding: 0px 10px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-wrapper:hover {
  border: 1px dashed #ccc;
}
.edit-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
</style>