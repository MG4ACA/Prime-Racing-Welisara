<template>
  <div>
    <!-- Hero Section -->
    <section id="home">
      <HeroSection />
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <AboutSection />
    </section>

    <!-- Inventory Section -->
    <section id="inventory" class="py-20 bg-gray-50/50">
      <InventoryGrid />
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <ServicesSection />
    </section>

    <!-- Test Ride Form -->
    <section id="test-ride" class="py-20 bg-gray-50/50">
      <TestRideForm />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <ContactSection />
    </section>
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';
import HeroSection from '../components/HeroSection.vue';
import InventoryGrid from '../components/InventoryGrid.vue';
import ServicesSection from '../components/ServicesSection.vue';
import TestRideForm from '../components/TestRideForm.vue';
</script>
