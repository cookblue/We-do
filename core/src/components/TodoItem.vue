<template>
  <div class="todo-item">
    <div class="todo-item-group">
      <input class="todo-item-check" type="checkbox" v-model="data.status" v-on:click="checkTodo(data)">
      <label class="todo-item-title">{{data.title}} </label>
    </div>
    <span class="todo-item-time center"> - </span>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'TodoItem',
  props: ['data'],
  methods: {
    checkTodo(data) {
      db.ref('todos/' + data['.key']).set({
        title: data.title,
        description: data.description,
        status: !data.status,
      });
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  height: 65px;
  border-bottom: 1px solid #6b62621c;
}
.center {
  text-align: center;
}
.todo-item-group {
  width: 80%;
  margin-left: 27px;
}

.todo-item-time {
  width: 20%;
}

.todo-item-check {
  position: absolute;
  opacity: 0;
  z-index: 2;
  width: 20px;
  height: 20px;
}
.todo-item-check + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}

.todo-item-check + label:before {
  content: '';
  border: 1.5px solid gray;
  border-radius: 3px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: text-top;
  width: 15px;
  height: 15px;
  background: white;
}

.todo-item-check:hover + label:before {
  border: 1.5px solid gray !important;
  border-radius: 3px;
}

.todo-item-check:checked + label:before {
  background: #f35429;
  border: 1.5px solid transparent !important;
  border-radius: 3px;
}

.todo-item-check:checked + label:after {
  content: '';
  position: absolute;
  left: 3.5px;
  top: 8px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow:
    2px 0 0 white,
    4px 0 0 white,
    4px -2px 0 white,
    4px -4px 0 white,
    4px -6px 0 white,
    4px -8px 0 white;
  transform: rotate(45deg);
}

.todo-item-check:checked + label {
  text-decoration: line-through;
  font-style: italic;
  color: gray;
}

</style>
