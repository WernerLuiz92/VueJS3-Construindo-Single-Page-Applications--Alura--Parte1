import { createWebHistory, createRouter } from "vue-router";
import Read from "@/components/pictures/Read.vue";
import Create from "@/components/pictures/Create.vue";
import Update from "@/components/pictures/Update.vue";
import Delete from "@/components/pictures/Delete.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Read,
        label: 'Home',
        navBar: true,
    },
    {
        path: '/create',
        name: 'create',
        component: Create,
        label: 'Cadastrar',
        navBar: true,
    },
    {
        path: '/update',
        name: 'uptade',
        component: Update,
        label: 'Alterar',
        navBar: true,
    },
    {
        path: '/delete',
        name: 'delete',
        component: Delete,
        label: 'Deletar',
        navBar: true,
    },
    {
        path: '/:pathMatch(.*)*',
        component: Read,
        navBar: false,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;