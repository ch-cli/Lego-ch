<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <components-list
            :list="defaultTextTemplates"
            @onItemClick="addItem"
          />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <EditWrapper
              v-for="item in components"
              :key="item.id"
              :id="item.id"
              @setActive="setActive"
              @deleteComponent="deleteComponent"
              :active="item.id === (currentElement && currentElement.id)"
            >
              <component :is="item.name" v-bind="item.props" />
            </EditWrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        组件属性
        <props-table
          v-if="currentElement && currentElement.props"
          :props="currentElement.props"
          @change="handleChange"
        ></props-table>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import { defaultTextTemplates } from "../defaultTemplates";
import LText from "../components/LText.vue";
import ComponentsList from "../components/ComponentsList.vue";
// import LImage from '../components/LImage.vue'
import EditWrapper from "../components/EditWrapper.vue";
import PropsTable from "../components/PropsTable.vue";
// import PropsTable from "../components/PropsTable"; //jsx写法
import { ComponentData } from "../store/editor";

export default defineComponent({
  components: {
    LText,
    ComponentsList,
    EditWrapper,
    // LImage,
    PropsTable,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    const currentElement = computed<ComponentData | null>(
      () => store.getters.getCurrentElement
    );
    const addItem = (component: any) => {
      store.commit("addComponent", component);
    };
    const setActive = (id: string) => {
      store.commit("setActive", id);
    };

    const deleteComponent = (id: string) => {
      store.commit("deleteComponent", id);
    };

    const handleChange = (e: any) => {
      store.commit("updateComponent", e);
    };

    return {
      components,
      addItem,
      defaultTextTemplates,
      setActive,
      deleteComponent,
      currentElement,
      handleChange,
    };
  },
});
</script>

<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
</style>