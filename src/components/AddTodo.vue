<script>
export default {
    props: {
        list: {
            type: Array,
        },
    },

    data() {
        return {
            todo: "",
            todoList: [],
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.todo) {
                this.todoList = [
                    ...this.list,
                    { todo: this.todo, completed: false, id: Date.now() },
                ];
                this.todo = "";
                this.$emit("updateTodos", this.todoList);
            }
        },
    },
};
</script>
<template>
    <form class="rounded mt-2 w-full flex" @submit="handleSubmit">
        <input type="text" class="border w-3/4 p-2" v-model="todo" />
        <button type="submit" class="border px-4 w-1/4 bg-green-100">
            Add Todo
        </button>
    </form>
</template>
