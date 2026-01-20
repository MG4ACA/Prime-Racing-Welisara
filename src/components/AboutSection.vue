<template>
  <div class="section-container bg-white">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-6">
        <div class="flex items-center space-x-2 text-honda-red">
          <Award class="w-6 h-6" />
          <span class="text-sm font-bold tracking-wider uppercase">Premium Standards</span>
        </div>

        <h2 class="heading-2 text-gray-900">
          The Honda Hub SL
          <span class="text-honda-red">Difference</span>
        </h2>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            At
            <span class="text-gray-900 font-bold underline decoration-honda-red decoration-2">
              Honda Hub SL
            </span>
            , we specialize in bringing the highest quality Japanese engineering to the streets of
            Sri Lanka. Located in the heart of
            <span class="text-gray-900 font-semibold">Malabe (185/A, Kaduwela Road)</span>
            , we are the premier destination for brand new, 0-mileage Honda scooters.
          </p>

          <p>
            Our commitment to authenticity means every motorcycle in our showroom is a
            <span class="text-honda-red font-semibold italic">Genuine Japanese Import</span>
            . From the agile ADV 160 to the luxurious PCX series, we ensure that every rider
            receives specialized attention, comprehensive 2-year warranty support, and a seamless
            registration process. Experience the pinnacle of performance and reliability.
          </p>
        </div>

        <!-- Featured Qualities -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-gray-900">Why Choose Us?</h3>
          <div class="grid grid-cols-2 gap-3">
            <div
              class="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
            >
              <div class="w-2 h-2 bg-honda-red rounded-full"></div>
              <span class="text-gray-900 font-semibold">0-Mileage Units</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
            >
              <div class="w-2 h-2 bg-honda-red rounded-full"></div>
              <span class="text-gray-900 font-semibold">Genuine CR</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
            >
              <div class="w-2 h-2 bg-honda-red rounded-full"></div>
              <span class="text-gray-900 font-semibold">2-Year Warranty</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
            >
              <div class="w-2 h-2 bg-honda-red rounded-full"></div>
              <span class="text-gray-900 font-semibold">One-Day Reg</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
        >
          <component
            :is="feature.icon"
            class="w-10 h-10 text-honda-red mb-4 group-hover:scale-110 transition-transform duration-300"
            :stroke-width="1.5"
          />
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-gray-500">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Award, Shield, Trophy, Users, Wrench } from 'lucide-vue-next';

const features = [
  {
    icon: Shield,
    title: '2-Year Warranty',
    description: 'All bikes come with comprehensive 2-year warranty coverage',
  },
  {
    icon: Wrench,
    title: 'Expert Service',
    description: 'Professional maintenance and repair by certified technicians',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support before, during, and after your purchase',
  },
  {
    icon: Trophy,
    title: 'Brand New Imports',
    description: 'Only brand new imported motorcycles, never used or reconditioned',
  },
];
</script>
