import Vue from 'vue'
import VueRouter from 'vue-route';
import List from './pages/list/List.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', 
    routes: [ //cuando las rutas son objetos path:
        {
            path:'/', //queda cargada desde el principio (import from...)
            component: List
        },
        {
            path: '/add', //se carga sólo cuando se navegue
            component: () => import ('./pages/add/Add')
        },
        {
            path: '/:id',
            component: () => import ('./pages/details/Details')
        }
    ]
  })
