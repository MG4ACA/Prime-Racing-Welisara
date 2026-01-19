import { createRouter, createWebHistory } from 'vue-router';
import BikeDetails from '../views/BikeDetails.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { section: 'home' },
  },
  {
    path: '/about',
    name: 'About',
    component: HomePage,
    meta: { section: 'about' },
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: HomePage,
    meta: { section: 'inventory' },
  },
  {
    path: '/services',
    name: 'Services',
    component: HomePage,
    meta: { section: 'services' },
  },
  {
    path: '/test-ride',
    name: 'TestRide',
    component: HomePage,
    meta: { section: 'test-ride' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: HomePage,
    meta: { section: 'contact' },
  },
  {
    path: '/bike/:id',
    name: 'BikeDetails',
    component: BikeDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    // Scroll to specific section based on route meta
    const sectionId = to.meta?.section;
    if (sectionId && sectionId !== 'home') {
      return new Promise((resolve) => {
        const maxAttempts = 20;
        let attempts = 0;

        const tryScroll = () => {
          attempts++;
          const element = document.getElementById(sectionId);

          if (element) {
            resolve({
              el: `#${sectionId}`,
              behavior: 'smooth',
            });
          } else if (attempts < maxAttempts) {
            setTimeout(tryScroll, 100);
          } else {
            resolve({ top: 0, behavior: 'smooth' });
          }
        };

        tryScroll();
      });
    }

    // Default: scroll to top
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
