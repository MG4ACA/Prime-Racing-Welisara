<template>
  <div class="section-container">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-6">
        <div class="flex items-center space-x-2 text-ktm-orange">
          <Award class="w-6 h-6" />
          <span class="text-sm font-semibold tracking-wider uppercase">About Us</span>
        </div>
        
        <h2 class="heading-2 text-white">
          Your Trusted <span class="gradient-text">Motorcycle Partner</span>
        </h2>
        
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>
            At <span class="text-white font-semibold">Prime Racing Welisara</span>, we're passionate about 
            delivering the ultimate riding experience. Located at <span class="text-ktm-orange">No. 47, Ragama Road, Welisara</span>, 
            we specialize in premium motorcycles from the world's leading manufacturers.
          </p>
          
          <p>
            With over a decade of experience in the motorcycle industry, we've built a reputation 
            for excellence in sales, service, and customer satisfaction. Our expert team is dedicated 
            to helping you find the perfect ride that matches your style and needs.
          </p>
        </div>
        
        <!-- Brands -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-white">Featured Brands</h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="flex items-center space-x-2 bg-ktm-gray p-3 rounded-lg border border-gray-800">
              <div class="w-2 h-2 bg-ktm-orange rounded-full"></div>
              <span class="text-ktm-orange font-semibold">KTM</span>
            </div>
            <div class="flex items-center space-x-2 bg-ktm-gray p-3 rounded-lg border border-gray-800">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-green-500 font-semibold">Kawasaki</span>
            </div>
            <div class="flex items-center space-x-2 bg-ktm-gray p-3 rounded-lg border border-gray-800">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-blue-500 font-semibold">Yamaha</span>
            </div>
            <div class="flex items-center space-x-2 bg-ktm-gray p-3 rounded-lg border border-gray-800">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-red-500 font-semibold">Triumph</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="card group cursor-pointer"
        >
          <component 
            :is="feature.icon" 
            class="w-10 h-10 text-ktm-orange mb-4 group-hover:scale-110 transition-transform duration-300" 
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
import { Award, Shield, Wrench, Users, Trophy } from 'lucide-vue-next'

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Only genuine, certified motorcycles from authorized dealers'
  },
  {
    icon: Wrench,
    title: 'Expert Service',
    description: 'Professional maintenance and repair by certified technicians'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support before, during, and after your purchase'
  },
  {
    icon: Trophy,
    title: 'Best Prices',
    description: 'Competitive pricing with flexible financing options'
  }
]
</script>
