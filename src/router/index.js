import { createWebHistory, createRouter } from "vue-router";
import Read from "@/components/pictures/Read.vue";
import Create from "@/components/pictures/Create.vue";
import Update from "@/components/pictures/Update.vue";
import Delete from "@/components/pictures/Delete.vue";

export const routes = [
    {
        path: '/',
        name: 'Read',
        component: Read,
        label: 'Home',
    },
    {
        path: '/create',
        name: 'Create',
        component: Create,
        label: 'Cadastrar',
    },
    {
        path: '/update',
        name: 'Update',
        component: Update,
        label: 'Alterar',
    },
    {
        path: '/delete',
        name: 'Delete',
        component: Delete,
        label: 'Deletar',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;