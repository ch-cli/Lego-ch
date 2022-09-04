<template>
  <div class="content-container">
    <TemplateList :list="testData"></TemplateList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import TemplateList from "../components/TemplateList.vue";

export default defineComponent({
  components: {
    TemplateList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    // 响应式  泛型templates自动补全
    const testData = computed(() => store.state.templates.data);
    return {
      testData,
    };
  },
});
</script>

<style>
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>