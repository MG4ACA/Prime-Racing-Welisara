<template>
  <div ref="cardRef" class="card group relative overflow-hidden cursor-pointer">
    <!-- Image Carousel -->
    <div class="relative h-64 mb-4 rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

      <img
        :src="bike.images[currentImageIndex]"
        :alt="bike.name"
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />

      <!-- Brand Badge -->
      <div
        class="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm border border-jl-green text-jl-green"
      >
        {{ bike.brand }}
      </div>

      <!-- Condition Badge -->
      <div
        class="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
        :class="
          bike.condition === 'Brand New'
            ? 'bg-jl-green text-white border border-jl-green'
            : 'bg-yellow-600 text-white border border-yellow-600'
        "
      >
        {{ bike.condition }}
      </div>

      <!-- Image Navigation Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        <button
          v-for="(img, idx) in bike.images"
          :key="idx"
          @click.stop="currentImageIndex = idx"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentImageIndex === idx ? 'bg-jl-green w-6' : 'bg-white/50 hover:bg-white/80'"
        ></button>
      </div>
    </div>

    <!-- Bike Info -->
    <div class="space-y-3">
      <div>
        <h3
          class="text-xl font-bold text-white group-hover:text-jl-green transition-colors duration-300"
        >
          {{ bike.name }}
        </h3>
        <p class="text-sm text-gray-400">{{ bike.year }}</p>
      </div>

      <!-- Key Specs -->
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="flex items-center space-x-2 text-gray-300">
          <Gauge class="w-4 h-4 text-jl-green" />
          <span>{{ bike.specs.power }}</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-300">
          <Zap class="w-4 h-4 text-jl-green" />
          <span>{{ bike.specs.engine }}</span>
        </div>
      </div>

      <!-- Features Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(feature, idx) in bike.features.slice(0, 3)"
          :key="idx"
          class="px-2 py-1 text-xs bg-jl-dark rounded border border-gray-800 text-gray-400"
        >
          {{ feature }}
        </span>
        <span
          v-if="bike.features.length > 3"
          class="px-2 py-1 text-xs bg-jl-dark rounded border border-gray-800 text-jl-green"
        >
          +{{ bike.features.length - 3 }} more
        </span>
      </div>

      <!-- View Details Button -->
      <router-link
        :to="`/bike/${bike.id}`"
        class="w-full mt-4 py-2 bg-jl-dark border border-gray-800 text-white rounded-lg hover:border-jl-green hover:text-jl-green transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <Info class="w-4 h-4" />
        <span>View Full Specs</span>
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
