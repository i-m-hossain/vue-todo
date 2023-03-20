<script>
export default {
  props: {
    todo: Object,
    handleDelete: {
      type: Function,
    },
    handleComplete: {
      type: Function,
    },
  },
};
</script>
<template>
  <div class="flex justify-between space-x-2 mt-2 border-b pb-2">
    <p v-bind:class="{ 'line-through': todo.completed }">
      {{ todo.todo }}
    </p>
    <input
      type="checkbox"
      @change="handleComplete(todo.id)"
      :checked="todo.completed"
    />
    <button class="border px-2" v-if="!todo.completed">Edit</button>
    <button type="button" class="border px-2" @click="handleDelete(todo.id)">
      Delete
    </button>
  </div>
</template>
