import { createRouter, createWebHistory } from "vue-router"

import List from './componets/List'
import Save from './componets/Save'

const routes = [
    {
        name:'list',
        path:'/vue',
        component: List
    },
    {
        name:'save',
        path:'/vue/save',
        component: Save
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router