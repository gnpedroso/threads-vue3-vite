import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('../components/PageThreadShow.vue'),
      props: true,
      beforeEnter(to, from, next) {
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
        if (threadExists) {
          return next();
        } else {
          next({ 
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            // preserve existing query and hash
            query: to.query,
            hash: to.hash
          });
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/PageNotFound.vue')
    }
  ]
})

export default router
