<template>
  <div class="section-container">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-6">
        <div class="flex items-center space-x-2 text-jl-green">
          <Award class="w-6 h-6" />
          <span class="text-sm font-semibold tracking-wider uppercase">About Us</span>
        </div>

        <h2 class="heading-2 text-white">
          Your Trusted
          <span class="gradient-text">Motorcycle Partner</span>
        </h2>

        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>
            At
            <span class="text-white font-semibold">Motobikeshop.lk</span>
            , we're passionate about buying and selling all kinds of motorcycles in Sri Lanka.
            Located at
            <span class="text-jl-green">No. 369/c Avissawella Road, Wellampitya</span>
            , we specialize in both brand new 0-mileage motorcycles and certified pre-owned bikes
            from leading manufacturers.
          </p>

          <p>
            With extensive experience in the motorcycle industry, we've built a reputation for
            excellence in sales, service, and customer satisfaction. Our expert team is dedicated to
            helping you find the perfect ride that matches your style and needs, whether you're
            looking for a brand new bike with leasing options or a quality used motorcycle.
          </p>
        </div>

        <!-- Brands -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-white">Featured Brands</h3>
          <div class="grid grid-cols-2 gap-3">
            <div
              class="flex items-center space-x-2 bg-jl-gray p-3 rounded-lg border border-gray-800"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-jl-green font-semibold">KTM</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-jl-gray p-3 rounded-lg border border-gray-800"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-jl-green font-semibold">Kawasaki</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-jl-gray p-3 rounded-lg border border-gray-800"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-jl-green font-semibold">Yamaha</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-jl-gray p-3 rounded-lg border border-gray-800"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-jl-green font-semibold">Honda</span>
            </div>
            <div
              class="flex items-center space-x-2 bg-jl-gray p-3 rounded-lg border border-gray-800"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-jl-green font-semibold">Suzuki</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(feature, index) in features" :key="index" class="card group cursor-pointer">
          <component
            :is="feature.icon"
            class="w-10 h-10 text-jl-green mb-4 group-hover:scale-110 transition-transform duration-300"
            :stroke-width="1.5"
          />
          <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-gray-400">{{ feature.description }}</p>
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
