<script>
export default {
    props: {
        todo: Object,
        list: Array,
    },
    data() {
        return {
            editStatus: false,
        };
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
        todoItem: {
            // getter
            get() {
                return this.todo || {};
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
        handleEditTodo(e, id) {
            e.preventDefault();
            this.todoList = this.todoList.map((item) => {
                if (item.id === id) {
                    item.todo = this.todoItem.todo;
                }
                this.$emit("updateTodos", this.todoList);
                this.editStatus = false;
                return item;
            });
        },
    },
};
</script>
<template>
    <form
        @submit="(e) => handleEditTodo(e, todo.id)"
        class="flex justify-between space-x-2 mt-2 border-b pb-2"
    >
        <p v-if="!editStatus" v-bind:class="{ 'line-through': todo.completed }">
            {{ todo.todo }}
        </p>
        <input
            v-else
            type="text"
            v-model="todoItem.todo"
            class="px-2 outline-pink-100 rounded-md"
        />
        <input
            type="checkbox"
            @change="handleComplete(todo.id)"
            :checked="todo.completed"
        />

        <button
            class="border px-2 rounded-md bg-blue-200"
            v-if="!todo.completed && !editStatus"
            type="button"
            @click="($event) => (editStatus = true)"
        >
            Edit
        </button>
        <button
            class="border px-2 rounded-md bg-blue-200"
            v-if="editStatus"
            type="submit"
        >
            Update
        </button>

        <button
            type="button"
            class="border px-2 bg-red-200 rounded-md"
            @click="handleDelete(todo.id)"
        >
            Delete
        </button>
    </form>
</template>
