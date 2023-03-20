<script>
export default {
    props: {
        todo: Object,
        list: Array,
    },
    computed: {
        todoList: {
            // getter
            get() {
                return this.list || [];
            },
            // setter
            set(newValue) {
                return newValue;
            },
        },
    },
    methods: {
        handleDelete(id) {
            const confirmed = confirm("are you sure want to delete?");
            if (confirmed) {
                const filteredTodo = this.todoList.filter(
                    (item) => item.id !== id
                );
                this.todoList = filteredTodo;
                this.$emit("updateTodos", filteredTodo);
            }
        },
        handleComplete(id) {
            this.todoList = this.todoList.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                this.$emit("updateTodos", this.todoList);
                return item;
            });
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
        <button
            type="button"
            class="border px-2"
            @click="handleDelete(todo.id)"
        >
            Delete
        </button>
    </div>
</template>
