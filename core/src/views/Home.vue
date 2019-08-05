<template>
  <div class="home">
    <TodoGroup msg="Welcome to Your Vue.js App"/>
    <TodoItem v-for="todo in todos" v-bind:data="todo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../db';

import TodoGroup from '@/components/TodoGroup.vue';
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'home',
  components: {
    TodoGroup,
    TodoItem,
  },
  data() {
    return {
      todos: [],
    }
  },
  firebase: {
    todos: db.ref('todos'),
  },
  mounted() {
  },
};
</script>
