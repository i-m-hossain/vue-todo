<script>
import AddTodo from "./AddTodo.vue";
import Todo from "./Todo.vue";
import TodoContainer from "./TodoContainer.vue";

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
        updateTodos(todos) {
            this.list = todos;
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
                <!-- Add to do -->
                <AddTodo :list="list" @updateTodos="updateTodos" />

                <!-- Todo list -->
                <section class="flex space-x-4">
                    <TodoContainer containerTitle="Todo List">
                        <h2
                            v-if="this.incompleteTodos.length < 1"
                            class="bg-red-100 px-2"
                        >
                            No data found
                        </h2>
                        <div
                            v-for="item of incompleteTodos"
                            :key="item.id"
                            class="flex justify-between space-x-2"
                        >
                            <Todo
                                :todo="item"
                                :list="list"
                                @updateTodos="updateTodos"
                            />
                        </div>
                    </TodoContainer>

                    <TodoContainer containerTitle="Completed Todo">
                        <h2
                            v-if="this.completedTodos.length < 1"
                            class="bg-red-100 px-2"
                        >
                            No data found
                        </h2>
                        <div
                            v-for="item of completedTodos"
                            :key="item.id"
                            class="flex justify-between space-x-2"
                        >
                            <Todo
                                :todo="item"
                                :list="list"
                                @updateTodos="updateTodos"
                            />
                        </div>
                    </TodoContainer>
                </section>
            </div>
        </div>
    </div>
</template>
