import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/exercise/:id',
            name: 'exercise-detail',
            component: () => import('../views/ExerciseView.vue')
        }
    ]
})

export default router