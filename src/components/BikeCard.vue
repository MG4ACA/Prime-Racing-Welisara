<template>
  <div
    ref="cardRef"
    class="bg-white group relative overflow-hidden cursor-pointer rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <!-- Image Carousel -->
    <div class="relative h-72 overflow-hidden">
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-60"
      ></div>

      <img
        :src="bike.images[currentImageIndex]"
        :alt="bike.name"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      <!-- Brand Badge -->
      <div
        class="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 shadow-sm"
      >
        {{ bike.brand }}
      </div>

      <!-- Condition Badge -->
      <div
        class="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-honda-red backdrop-blur-sm shadow-lg shadow-honda-red/20 text-white"
      >
        0-Mileage
      </div>

      <!-- Image Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
        <button
          v-for="(img, idx) in bike.images"
          :key="idx"
          @click.stop="currentImageIndex = idx"
          class="w-1.5 h-1.5 rounded-full transition-all duration-300"
          :class="
            currentImageIndex === idx ? 'bg-honda-red w-4' : 'bg-gray-300 hover:bg-honda-red/50'
          "
        ></button>
      </div>
    </div>

    <!-- Bike Info -->
    <div class="p-6 space-y-4">
      <div class="space-y-1">
        <h3
          class="text-xl font-bold text-gray-900 group-hover:text-honda-red transition-colors duration-300 leading-tight"
        >
          {{ bike.name }}
        </h3>
        <div class="flex items-center space-x-2">
          <span class="text-xs font-bold text-honda-red tracking-wider">
            {{ bike.year }} Edition
          </span>
          <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span class="text-xs font-semibold text-gray-500 italic">One-Day Reg Available</span>
        </div>
      </div>

      <!-- Key Specs Pill -->
      <div class="flex items-center space-x-4 p-3 bg-gray-50 rounded-2xl border border-gray-100">
        <div class="flex items-center space-x-2">
          <Gauge class="w-4 h-4 text-honda-red" />
          <span class="text-xs font-bold text-gray-900">{{ bike.specs.power }}</span>
        </div>
        <div class="h-4 w-[1px] bg-gray-200"></div>
        <div class="flex items-center space-x-2">
          <Zap class="w-4 h-4 text-honda-red" />
          <span class="text-xs font-bold text-gray-900">{{ bike.specs.engine }}</span>
        </div>
      </div>

      <!-- Featured Tags -->
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="(feature, idx) in bike.features.slice(0, 3)"
          :key="idx"
          class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-tighter bg-white border border-gray-100 rounded-lg text-gray-500 shadow-sm"
        >
          {{ feature }}
        </span>
      </div>

      <!-- View Details Button -->
      <router-link
        :to="`/bike/${bike.id}`"
        class="w-full py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-honda-red transition-all duration-500 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-honda-red/20"
      >
        <Info class="w-4 h-4" />
        <span>Explore Full Specs</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gauge, Info, Zap } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  bike: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const cardRef = ref(null);
const currentImageIndex = ref(0);

onMounted(() => {
  if (cardRef.value) {
    // Set initial state
    gsap.set(cardRef.value, {
      opacity: 0,
      y: 50,
    });

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
          delay: props.index * 0.1,
        });
      },
      once: true,
    });
  }

  // Auto-rotate images every 5 seconds
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.bike.images.length;
  }, 5000);
});
</script>
