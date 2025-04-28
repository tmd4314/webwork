<template>
  <div>
    <todo-item
      :todos = "todos"
      :new-todo = "newTodo"
      @add-todo = "addTodo"
      @remove-todo = "removeTodo"
    />
  </div>
</template>
<script>
  import TodoItem from '@/components/TodoItem.vue';
  let id = 1; // 여기에 id를 먼저 선언해야 해
  export default {
    components : {TodoItem},
    data() {
      return {
        newTodo: '',
        todos: [
          { id: id++, text: 'HTML 배우기' },
          { id: id++, text: 'JavaScript 배우기' },
          { id: id++, text: 'Vue 배우기' }
        ]
      }
    },
    methods: {
      addTodo(newTodoText) {
        this.todos.push({id: id++, text: newTodoText});
        this.newTodo = '';
      },
      removeTodo(todo) {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      }
    }
  }
</script>