<template>
  <div class="space-y-8">
    <header
      class="h-[200px] bg-gradient-to-r from-blue-700 to-red-700 pb-16 -mb-12 grid">
      <div class="mt-auto space-y-2">
        <div class="wrapper">
          <h1 class="text-2xl tracking-wide font-semibold">Todo App</h1>
        </div>
        <div class="wrapper">
          <form @submit="addToDo">
          <input
            name="label"
            class="bg-slate-700 text-white py-4 px-8 w-full text-lg"
            placeholder="Create a new todo" />
          </form>
        </div>
      </div>
    </header>
    <div class="wrapper">
      <ToDoList :items="todos" @onTodoClick="toggleTodo" />
    </div>
    <div class="wrapper">
      <div class="text-center" v-if="doneTodosCount > 0">
        <div class="text-2xl font-semibold">Congrats!</div> 
        <div>You've completed {{ doneTodosCount }} {{ doneTodosCount > 1 ? 'todos' : 'todo' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from "../components/ToDoList.vue";

export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.completed).length
    }
  },
  methods: {
    addToDo(event) {
      event.preventDefault()
      this.$store.dispatch("addToDo", { 
        label: new FormData(event.target).get('label'), 
        completed: false 
      })
      event.target.reset()
    },
    toggleTodo(item) {
      this.$store.dispatch("toggleToDo", item);
    },
  },
  components: {
    ToDoList,
  },
};
</script>
