import { createApp,h } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import "./index.css";
import routes from "./routes.js"

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
const app = createApp({
    render: () => h(App),
});
app.use(router);
app.mount("#app");
