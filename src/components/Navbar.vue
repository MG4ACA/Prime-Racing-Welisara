<template>
  <nav
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <img
            src="/logo.png"
            alt="Prime Racing Logo"
            class="h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 rounded-lg"
          />
          <div>
            <h1 class="text-xl font-display font-bold text-white">Prime Racing</h1>
            <p class="text-xs text-ktm-orange">Welisara</p>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in menuItems"
            :key="item.id"
            :to="item.route"
            class="text-gray-300 hover:text-ktm-orange transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </router-link>
          <router-link to="/test-ride" class="btn-primary">Book Test Ride</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white p-2">
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-ktm-dark border-t border-gray-800">
        <div class="section-container py-4 space-y-3">
          <router-link
            v-for="item in menuItems"
            :key="item.id"
            :to="item.route"
            @click="mobileMenuOpen = false"
            class="block text-gray-300 hover:text-ktm-orange transition-colors duration-300 py-2 font-medium"
          >
            {{ item.label }}
          </router-link>
          <router-link
            to="/test-ride"
            @click="mobileMenuOpen = false"
            class="btn-primary block text-center mt-4"
          >
            Book Test Ride
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { Menu, X } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const menuItems = [
  { id: 'home', label: 'Home', route: '/' },
  { id: 'about', label: 'About', route: '/about' },
  { id: 'inventory', label: 'Inventory', route: '/inventory' },
  { id: 'services', label: 'Services', route: '/services' },
  { id: 'contact', label: 'Contact', route: '/contact' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
