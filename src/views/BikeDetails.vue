<template>
  <div class="min-h-screen bg-white text-gray-900 pt-20">
    <div v-if="bike" class="section-container py-12">
      <!-- Back Button -->
      <router-link
        to="/"
        class="inline-flex items-center space-x-2 text-gray-400 hover:text-honda-red transition-colors mb-8 group"
      >
        <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span class="font-bold uppercase tracking-widest text-xs">Explore All Models</span>
      </router-link>

      <!-- Main Section -->
      <div class="grid lg:grid-cols-2 gap-16 mb-20">
        <!-- Image Gallery -->
        <div class="space-y-6">
          <div
            ref="mainImageRef"
            class="relative h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl shadow-gray-100"
          >
            <img
              :src="bike.images[currentImageIndex]"
              :alt="bike.name"
              class="w-full h-full object-cover"
            />

            <!-- Status Badge -->
            <div
              class="absolute top-8 left-8 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-white/90 backdrop-blur-md border border-gray-100 text-gray-900 shadow-xl"
            >
              Authentic Japanese
            </div>

            <div
              class="absolute bottom-8 right-8 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-honda-red text-white shadow-xl shadow-honda-red/20"
            >
              High Performance
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex justify-center gap-4">
            <button
              v-for="(image, idx) in bike.images"
              :key="idx"
              @click="currentImageIndex = idx"
              class="relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-sm"
              :class="
                currentImageIndex === idx
                  ? 'border-honda-red scale-110 shadow-lg shadow-honda-red/10'
                  : 'border-gray-100 opacity-50 hover:opacity-100'
              "
            >
              <img
                :src="image"
                :alt="`${bike.name} thumbnail`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Bike Info -->
        <div ref="infoRef" class="space-y-8 py-4">
          <div>
            <div class="flex items-center space-x-3 text-honda-red mb-4">
              <div class="h-[2px] w-8 bg-honda-red"></div>
              <span class="text-xs font-black tracking-[0.3em] uppercase">
                {{ bike.brand }} {{ bike.year }}
              </span>
            </div>
            <h1
              class="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter leading-none"
            >
              {{ bike.name }}
            </h1>
            <p class="text-xl font-medium text-gray-400 italic">"{{ bike.tagline }}"</p>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed font-medium">
            {{ bike.description }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              :href="`https://wa.me/94779202056?text=${encodeURIComponent('Hi Honda Hub SL! Im interested in the ' + bike.name + '. Is it available at Malabe?')}`"
              target="_blank"
              class="flex-1 py-5 bg-honda-red text-white rounded-2xl font-black uppercase tracking-wider text-sm flex items-center justify-center space-x-3 shadow-2xl shadow-honda-red/30 hover:-translate-y-1 transition-all duration-500"
            >
              <MessageCircle class="w-5 h-5" />
              <span>Priority Inquiry</span>
            </a>
            <a
              href="/#test-ride"
              class="flex-1 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-wider text-sm flex items-center justify-center space-x-3 hover:bg-black transition-all duration-500"
            >
              <Calendar class="w-5 h-5" />
              <span>Book Viewing</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Technical Specifications -->
      <div
        ref="specsRef"
        class="mb-24 px-8 py-16 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden relative"
      >
        <div class="absolute -right-20 -top-20 opacity-[0.03] rotate-12">
          <Settings class="w-96 h-96 text-gray-900" />
        </div>

        <h2 class="text-3xl font-black tracking-tighter text-gray-900 mb-12 relative z-10">
          Japanese Engineering
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <div
            v-for="(value, key) in bike.specs"
            :key="key"
            class="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-500 group"
          >
            <div class="text-[10px] font-black text-honda-red uppercase tracking-[0.2em] mb-3">
              {{ formatSpecKey(key) }}
            </div>
            <div
              class="text-lg font-bold text-gray-900 group-hover:text-honda-red transition-colors"
            >
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="section-container py-20 text-center">
      <div
        class="inline-block w-16 h-16 border-4 border-honda-red border-t-transparent rounded-full animate-spin"
      ></div>
      <p class="text-gray-600 font-bold mt-4 uppercase tracking-widest text-xs">
        Accessing Catalog...
      </p>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Calendar, MessageCircle, Settings } from 'lucide-vue-next';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { bikesData } from '../data/bikes';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const currentImageIndex = ref(0);

const mainImageRef = ref(null);
const infoRef = ref(null);
const specsRef = ref(null);

const bike = computed(() => {
  return bikesData.find((b) => b.id === route.params.id);
});

const formatSpecKey = (key) => {
  return key.replace(/([A-Z])/g, ' $1').trim();
};

const animateElements = () => {
  const sections = [
    { ref: mainImageRef, delay: 0 },
    { ref: infoRef, delay: 0.2 },
    { ref: specsRef, delay: 0.4 },
  ];

  sections.forEach(({ ref, delay }) => {
    if (ref.value) {
      gsap.from(ref.value, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });
    }
  });
};

onMounted(() => {
  if (bike.value) {
    animateElements();
  }
});

watch(
  () => route.params.id,
  () => {
    currentImageIndex.value = 0;
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (bike.value) {
        ScrollTrigger.refresh();
        animateElements();
      }
    }, 100);
  },
);
</script>
