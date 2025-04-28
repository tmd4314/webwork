<template>
  <form @submit.prevent="onAddTodo">
    <input v-model="inputTodo" required placeholder="new todo">
    <button>할 일 추가</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="$emit('remove-todo', todo)">X</button>
    </li>
  </ul>
</template>
<script>
export default{
  props:{
    todos:{
      type: Array,
      required: true
    },
    newTodo:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputTodo: this.newTodo
    }
  },
  watch:{
    newTodo(newVal){
      this.inputTodo = newVal;
    }
  },
  methods: {
    onAddTodo() {
      if(this.inputTodo.trim()){
        this.$emit('add-todo', this.inputTodo);
        this.inputTodo = '';
      }
    }
  }
}
  
</script>