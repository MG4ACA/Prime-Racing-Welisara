<template>
  <div class="section-container bg-gray-50/50">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-honda-red mb-4">
        <Bike class="w-6 h-6" />
        <span class="text-sm font-bold tracking-wider uppercase">Live Inventory</span>
      </div>
      <h2 class="heading-2 text-gray-900 mb-4">
        Premium Honda
        <span class="text-honda-red">Collection</span>
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto font-medium">
        Discover our exclusive selection of 0-mileage, genuine Japanese imported Honda scooters.
        Engineered for excellence, ready for the Malabe roads.
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
