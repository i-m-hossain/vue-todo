<!--
This example demonstrates handling user input with the v-on directive.
-->

<script>
import AddTodo from "./components/AddTodo.vue";
import Todo from "./components/Todo.vue";
import TodoContainer from "./components/TodoContainer.vue";

export default {
  data() {
    return {
      appTitle: "Todo App!",
      list: [],
    };
  },
  computed: {
    completedTodos() {
      return this.list.filter((item) => item.completed) || [];
    },
    incompleteTodos() {
      return this.list.filter((item) => !item.completed) || [];
    },
  },
  methods: {
    update(todos) {
      this.todos = todos;
    },
    handleDelete(id) {
      const confirmed = confirm("are you sure want to delete?");
      if (confirmed) {
        const filteredTodo = this.list.filter((item) => item.id !== id);
        this.list = filteredTodo;
      }
    },
    handleComplete(id) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
  components: { Todo, TodoContainer, AddTodo },
};
</script>

<template>
  <div class="flex justify-center">
    <div>
      <h2 class="text-center mt-5 font-bold">
        {{ appTitle }}
      </h2>
      <div class="flex flex-col space-y-4 w-full rounded-md">
        <AddTodo v-bind:list="list" @updateTodos="update" />
        <!-- Todo list -->
        <section class="flex space-x-4">
          <TodoContainer
            containerTitle="Todo List"
            :list="this.incompleteTodos"
            v-slot="slotProps"
          >
            <Todo
              :todo="slotProps.todo"
              :handleComplete="this.handleComplete"
              :handleDelete="this.handleDelete"
            />
          </TodoContainer>

          <TodoContainer
            containerTitle="Completed Todo"
            :list="this.completedTodos"
            v-slot="slotProps"
          >
            <Todo
              :todo="slotProps.todo"
              :handleComplete="this.handleComplete"
              :handleDelete="this.handleDelete"
            />
          </TodoContainer>
        </section>
      </div>
    </div>
  </div>
</template>
