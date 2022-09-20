<template>
  <h1>{{ msg }}</h1>
  <hello msg="1234"></hello>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Hello from "./Hello.vue";
import axios from "axios";
export default defineComponent({
  name: "HelloWorld",
  components: {
    Hello,
  },
  props: {
    msg: String,
  },
  emits: ["send"],
  setup(props, context) {
    const todo = ref("");
    const todos = ref<string[]>([]);
    const user = reactive({
      data: null as any,
      loading: false,
      error: false,
    });
    const count = ref(1);
    const setCount = () => {
      count.value++;
    };
    const addTodo = () => {
      if (todo.value) {
        todos.value.push(todo.value);
        context.emit("send", todo.value);
      }
    };
    const loadUser = () => {
      user.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((resp) => {
          console.log(resp);
          user.data = resp.data;
        })
        .catch(() => {
          user.error = true;
        })
        .finally(() => {
          user.loading = false;
        });
    };
    return {};
  },
});
</script>