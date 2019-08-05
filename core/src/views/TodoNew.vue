<template>
  <div class="todo-new">
    <div class="style-task">
      <div class="todo-new-task style-head">
        <router-link to="/">
          <i class="material-icons style-arrow-left pointer">keyboard_backspace</i>
        </router-link>
        <span>Add new task</span>
      </div>
     <!--  <div class="todo-new-task">
        <span >Personal Errads</span>
        <i class="material-icons style-v pointer">expand_more</i>
      </div> -->
      <input v-model="todoTitle" class="todo-new-task--title" placeholder="Title"></input>
      <!-- <span class="todo-new-task">Jueves 5pm</span> -->
      <div class="todo-new-task--description">
        <input v-model="todoDescription" class="todo-new-task--title" placeholder="Description (Optional)"></input>
      </div>
      <!-- <div class="todo-new-task style-icons">
        <i class = "material-icons pointer">camera_alt</i>
        <i class = "material-icons pointer">insert_photo</i>
        <i class = "material-icons pointer">videocam</i>
        <i class = "material-icons pointer">attach_file</i>
        <i class = "material-icons style-voice pointer">keyboard_voice</i>
      </div> -->
    </div>
    <div class="todo-new-task style-button">
      <button class="todo-new-task-button pointer" v-on:click="addTodo()">ADD TASK</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import { db } from '../db';

export default {
  name: 'TodoNew',
  data() {
    return {
      todoTitle: '',
      todoDescription: '',
    }
  },
  firebase: {
    todos: db.ref('todos'),
  },
  methods: {
    addTodo() {
      if (this.todoTitle) {
        this.$firebaseRefs.todos.push({
          title: this.todoTitle,
          description: this.todoDescription,
          time: 'any time',
          status: 0,
        })
        .then(() => {
          alert('Done!');
          this.$router.push('/');
        })
      } else {
        alert('Title is required');
      }
    },
  },
};
      
</script>
<style type="text/css">
input {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: .009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.pointer {
  cursor: pointer;
}
.todo-new {
  display: flex;
  flex-direction: column;
  background: #6e4ec7;
  color: white;
}
.todo-new-task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #80808078;
}
.todo-new-task--title {
  height: 54px;
  border-bottom: 1px solid #80808078;
  color: white;
}
.todo-new-task--description {
  height: 100px;
}
.todo-new-task p {
  margin-right: 27px;
}
.style-arrow-left {
  position: absolute;
  left: 13px;
}
.style-task {
  height: 100vh;
  padding: 27px;
}
.style-v {
  margin-right: 37px;
  color: #8f6fdf;
}

.style-head {
  justify-content: center !important;
  width: 100% !important;
  height: 70px !important;
  border-bottom: none !important;
  margin-left: 0px !important;
}
.material-icons {
  color: #b7b2b2;
}
.style-icons {
  justify-content: space-between !important;
}
.style-voice {
  margin-right: 11px;
}
.style-button{
  height:246px;
  border-bottom: none !important;
  justify-content: center !important;
}
.todo-new-task-button {
  height: 40px;
  width: 106px;
  border-radius: 27px;
  background:#ff4953;
  border-color: #ff4953;
  font-size: 12px;
  color: white;
}

</style>
