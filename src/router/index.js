import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ListsView from '@/views/ListsView.vue';
import AccountView from '@/views/AccountView.vue';
import MessagesView from '@/views/MessagesView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/lists',
    name: 'Lists',
    component: ListsView
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/messages',
    name: 'Messages',
    component: MessagesView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;