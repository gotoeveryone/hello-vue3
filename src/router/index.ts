import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue"
import Form from "@/components/Form.vue"

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/form",
            component: Form
        }
    ]
});
