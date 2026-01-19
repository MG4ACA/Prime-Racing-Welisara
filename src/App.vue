<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home">
        <HeroSection />
      </section>
      
      <!-- About Section -->
      <section id="about" class="py-20 bg-ktm-dark">
        <AboutSection />
      </section>
      
      <!-- Inventory Section -->
      <section id="inventory" class="py-20">
        <InventoryGrid />
      </section>
      
      <!-- Test Ride Form -->
      <section id="test-ride" class="py-20 bg-ktm-dark">
        <TestRideForm />
      </section>
      
      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <ContactSection />
      </section>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- WhatsApp Floating Button -->
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import InventoryGrid from './components/InventoryGrid.vue'
import TestRideForm from './components/TestRideForm.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>
