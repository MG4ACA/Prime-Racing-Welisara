<template>
  <div 
    ref="cardRef"
    class="card group relative overflow-hidden cursor-pointer"
  >
    <!-- Image Carousel -->
    <div class="relative h-64 mb-4 rounded-lg overflow-hidden">
      <div 
        class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
      ></div>
      
      <img 
        :src="bike.images[currentImageIndex]"
        :alt="bike.name"
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      
      <!-- Brand Badge -->
      <div 
        class="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm border"
        :class="`border-${bike.brandColor} text-${bike.brandColor}`"
      >
        {{ bike.brand }}
      </div>
      
      <!-- Image Navigation Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        <button 
          v-for="(img, idx) in bike.images" 
          :key="idx"
          @click.stop="currentImageIndex = idx"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentImageIndex === idx ? 'bg-ktm-orange w-6' : 'bg-white/50 hover:bg-white/80'"
        ></button>
      </div>
    </div>
    
    <!-- Bike Info -->
    <div class="space-y-3">
      <div>
        <h3 class="text-xl font-bold text-white group-hover:text-ktm-orange transition-colors duration-300">
          {{ bike.name }}
        </h3>
        <p class="text-sm text-gray-400">{{ bike.year }}</p>
      </div>
      
      <!-- Key Specs -->
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="flex items-center space-x-2 text-gray-300">
          <Gauge class="w-4 h-4 text-ktm-orange" />
          <span>{{ bike.specs.power }}</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-300">
          <Zap class="w-4 h-4 text-ktm-orange" />
          <span>{{ bike.specs.engine }}</span>
        </div>
      </div>
      
      <!-- Features Tags -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="(feature, idx) in bike.features.slice(0, 3)" 
          :key="idx"
          class="px-2 py-1 text-xs bg-ktm-dark rounded border border-gray-800 text-gray-400"
        >
          {{ feature }}
        </span>
        <span 
          v-if="bike.features.length > 3"
          class="px-2 py-1 text-xs bg-ktm-dark rounded border border-gray-800 text-ktm-orange"
        >
          +{{ bike.features.length - 3 }} more
        </span>
      </div>
      
      <!-- View Details Button -->
      <button 
        @click="showDetails = !showDetails"
        class="w-full mt-4 py-2 bg-ktm-dark border border-gray-800 text-white rounded-lg hover:border-ktm-orange hover:text-ktm-orange transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <Info class="w-4 h-4" />
        <span>{{ showDetails ? 'Hide' : 'View' }} Full Specs</span>
      </button>
    </div>
    
    <!-- Expanded Specs Modal -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="showDetails"
        @click.stop="showDetails = false"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <div 
          @click.stop
          class="bg-ktm-gray rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-2xl font-bold text-white">{{ bike.name }}</h3>
              <p class="text-ktm-orange">{{ bike.year }}</p>
            </div>
            <button 
              @click="showDetails = false"
              class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-ktm-dark transition-colors"
            >
              <X class="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          
          <!-- Full Specs Grid -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div 
              v-for="(value, key) in bike.specs" 
              :key="key"
              class="flex items-center justify-between p-3 bg-ktm-dark rounded-lg border border-gray-800"
            >
              <span class="text-gray-400 capitalize">{{ key }}</span>
              <span class="text-white font-semibold">{{ value }}</span>
            </div>
          </div>
          
          <!-- All Features -->
          <div class="space-y-3">
            <h4 class="text-lg font-semibold text-white">Features</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(feature, idx) in bike.features" 
                :key="idx"
                class="px-3 py-2 bg-ktm-dark rounded-lg border border-gray-800 text-gray-300"
              >
                {{ feature }}
              </span>
            </div>
          </div>
          
          <!-- CTA -->
          <a 
            href="#test-ride"
            @click="showDetails = false"
            class="btn-primary mt-6 w-full block text-center"
          >
            Book Test Ride
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Gauge, Zap, Info, X } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  bike: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const cardRef = ref(null)
const currentImageIndex = ref(0)
const showDetails = ref(false)

onMounted(() => {
  if (cardRef.value) {
    // Set initial state
    gsap.set(cardRef.value, {
      opacity: 0,
      y: 50
    })
    
    // Animate on scroll
    ScrollTrigger.create({
      trigger: cardRef.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cardRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: props.index * 0.1
        })
      },
      once: true
    })
  }
  
  // Auto-rotate images every 5 seconds
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.bike.images.length
  }, 5000)
})
</script>
