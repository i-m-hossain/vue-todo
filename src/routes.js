import EditTodo from "./components/EditTodo.vue";
import Home from "./components/Home.vue";
const routes = [
    { path: "/", component: Home },
    { path: "/edit", component: EditTodo },
];

export default routes;
