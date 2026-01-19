<template>
  <div class="section-container">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-ktm-orange mb-4">
        <Bike class="w-6 h-6" />
        <span class="text-sm font-semibold tracking-wider uppercase">Our Inventory</span>
      </div>
      <h2 class="heading-2 text-white mb-4">
        Featured <span class="gradient-text">Motorcycles</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Explore our carefully curated selection of premium motorcycles from the world's leading manufacturers
      </p>
    </div>
    
    <!-- Bikes Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BikeCard 
        v-for="(bike, index) in bikes" 
        :key="index"
        :bike="bike"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import { Bike } from 'lucide-vue-next'
import BikeCard from './BikeCard.vue'

const bikes = [
  {
    name: 'KTM Duke 390',
    year: '2026 Edition',
    brand: 'KTM',
    brandColor: 'ktm-orange',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      'https://images.unsplash.com/photo-1613669175184-7c34b4b78f92?w=800&q=80'
    ],
    specs: {
      engine: '373.3cc Single Cylinder',
      power: '43.5 HP @ 9,000 RPM',
      torque: '37 Nm @ 7,000 RPM',
      weight: '167 kg',
      topSpeed: '167 km/h',
      fuel: '13.4 L'
    },
    features: ['ABS', 'LCD Display', 'LED Lights', 'Slipper Clutch']
  },
  {
    name: 'Kawasaki Ninja 300',
    year: '2026',
    brand: 'Kawasaki',
    brandColor: 'green-500',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      'https://images.unsplash.com/photo-1591067933962-4a4b8c78f5b0?w=800&q=80',
      'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80'
    ],
    specs: {
      engine: '296cc Parallel Twin',
      power: '39 HP @ 11,000 RPM',
      torque: '27 Nm @ 10,000 RPM',
      weight: '172 kg',
      topSpeed: '180 km/h',
      fuel: '17 L'
    },
    features: ['ABS', 'Digital Display', 'LED Lights', 'Dual Channel ABS']
  },
  {
    name: 'Honda CB350 RS',
    year: '2026',
    brand: 'Honda',
    brandColor: 'red-500',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80'
    ],
    specs: {
      engine: '348.36cc Single Cylinder',
      power: '20.8 HP @ 5,500 RPM',
      torque: '30 Nm @ 3,000 RPM',
      weight: '181 kg',
      topSpeed: '114 km/h',
      fuel: '15 L'
    },
    features: ['ABS', 'Analog-Digital Display', 'LED DRL', 'Assist & Slipper Clutch']
  },
  {
    name: 'Yamaha MT-15',
    year: '2026',
    brand: 'Yamaha',
    brandColor: 'blue-500',
    images: [
      'https://images.unsplash.com/photo-1571058993562-927565980c09?w=800&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80'
    ],
    specs: {
      engine: '155cc Single Cylinder',
      power: '18.4 HP @ 10,000 RPM',
      torque: '14.1 Nm @ 7,500 RPM',
      weight: '141 kg',
      topSpeed: '136 km/h',
      fuel: '10 L'
    },
    features: ['ABS', 'Digital Display', 'LED Lights', 'Delta Box Frame']
  },
  {
    name: 'Triumph Street Triple',
    year: '2026',
    brand: 'Triumph',
    brandColor: 'red-600',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80'
    ],
    specs: {
      engine: '765cc Triple Cylinder',
      power: '116 HP @ 11,700 RPM',
      torque: '79 Nm @ 9,350 RPM',
      weight: '187 kg',
      topSpeed: '225 km/h',
      fuel: '17.4 L'
    },
    features: ['TFT Display', 'Riding Modes', 'Quick Shifter', 'Traction Control']
  }
]
</script>
