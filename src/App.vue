<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content with Router -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- WhatsApp Floating Button -->
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
</script>
