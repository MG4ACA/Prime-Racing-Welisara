<template>
  <div class="section-container">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-jl-green mb-4">
        <Bike class="w-6 h-6" />
        <span class="text-sm font-semibold tracking-wider uppercase">Our Inventory</span>
      </div>
      <h2 class="heading-2 text-white mb-4">
        Featured
        <span class="gradient-text">Motorcycles</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Explore our carefully curated selection of premium motorcycles from the world's leading
        manufacturers
      </p>
    </div>

    <!-- Bikes Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BikeCard v-for="(bike, index) in bikes" :key="index" :bike="bike" :index="index" />
    </div>
  </div>
</template>

<script setup>
import { Bike } from 'lucide-vue-next';
import { bikesData } from '../data/bikes';
import BikeCard from './BikeCard.vue';

const bikes = bikesData;
</script>
