<template>
  <div class="min-h-screen bg-black text-white pt-20">
    <div v-if="bike" class="section-container py-12">
      <!-- Back Button -->
      <router-link
        to="/inventory"
        class="inline-flex items-center space-x-2 text-gray-400 hover:text-jl-green transition-colors mb-8 group"
      >
        <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Inventory</span>
      </router-link>

      <!-- Hero Section with Image Gallery -->
      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <!-- Image Gallery -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div
            ref="mainImageRef"
            class="relative h-96 rounded-xl overflow-hidden bg-jl-gray border border-gray-800"
          >
            <img
              :src="bike.images[currentImageIndex]"
              :alt="bike.name"
              class="w-full h-full object-cover"
            />

            <!-- Brand Badge -->
            <div
              class="absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold bg-black/50 backdrop-blur-sm border border-jl-green text-jl-green"
            >
              {{ bike.brand }}
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-jl-green transition-colors"
            >
              <ChevronLeft class="w-6 h-6 text-white" />
            </button>
            <button
              @click="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-jl-green transition-colors"
            >
              <ChevronRight class="w-6 h-6 text-white" />
            </button>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="grid grid-cols-3 gap-4">
            <button
              v-for="(image, idx) in bike.images"
              :key="idx"
              @click="currentImageIndex = idx"
              class="relative h-24 rounded-lg overflow-hidden border-2 transition-all"
              :class="
                currentImageIndex === idx
                  ? 'border-jl-green scale-105'
                  : 'border-gray-800 hover:border-gray-600'
              "
            >
              <img
                :src="image"
                :alt="`${bike.name} ${idx + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Bike Info -->
        <div ref="infoRef" class="space-y-6">
          <!-- Title -->
          <div>
            <div class="flex items-center space-x-2 text-jl-green mb-2">
              <span class="text-sm font-semibold tracking-wider uppercase">{{ bike.year }}</span>
            </div>
            <h1 class="heading-2 text-white mb-2">{{ bike.name }}</h1>
            <p class="text-2xl font-semibold text-gray-400 italic">"{{ bike.tagline }}"</p>
          </div>

          <!-- Description -->
          <p class="text-gray-300 leading-relaxed">
            {{ bike.description }}
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-jl-gray rounded-lg p-4 border border-gray-800">
              <Gauge class="w-8 h-8 text-jl-green mb-2" />
              <div class="text-2xl font-bold text-white">{{ bike.specs.power.split(' ')[0] }}</div>
              <div class="text-xs text-gray-400">Horsepower</div>
            </div>
            <div class="bg-jl-gray rounded-lg p-4 border border-gray-800">
              <Zap class="w-8 h-8 text-jl-green mb-2" />
              <div class="text-2xl font-bold text-white">{{ bike.specs.torque.split(' ')[0] }}</div>
              <div class="text-xs text-gray-400">Torque (Nm)</div>
            </div>
            <div class="bg-jl-gray rounded-lg p-4 border border-gray-800">
              <Gauge class="w-8 h-8 text-jl-green mb-2" />
              <div class="text-2xl font-bold text-white">{{ bike.specs.topSpeed }}</div>
              <div class="text-xs text-gray-400">Top Speed</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/#test-ride" class="btn-primary flex-1 text-center">
              <span class="flex items-center justify-center gap-2">
                <Calendar class="w-5 h-5" />
                Book Test Ride
              </span>
            </a>
            <a
              :href="`https://wa.me/94771234567?text=${encodeURIComponent(`Hi! I'm interested in the ${bike.name}`)}`"
              target="_blank"
              class="btn-secondary flex-1 text-center"
            >
              <span class="flex items-center justify-center gap-2">
                <MessageCircle class="w-5 h-5" />
                Inquire Now
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Technical Specifications -->
      <div ref="specsRef" class="mb-16">
        <div class="flex items-center space-x-3 mb-8">
          <Settings class="w-8 h-8 text-jl-green" />
          <h2 class="heading-3 text-white">Technical Specifications</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(value, key) in bike.specs"
            :key="key"
            class="spec-card bg-jl-gray rounded-lg p-4 border border-gray-800 hover:border-jl-green transition-all duration-300"
          >
            <div class="flex items-center justify-between">
              <span class="text-gray-400 capitalize text-sm">{{ formatSpecKey(key) }}</span>
              <Info class="w-4 h-4 text-gray-600" />
            </div>
            <div class="text-white font-semibold mt-2 text-lg">{{ value }}</div>
          </div>
        </div>
      </div>

      <!-- Features & Highlights -->
      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <!-- Features -->
        <div ref="featuresRef">
          <div class="flex items-center space-x-3 mb-6">
            <CheckCircle class="w-8 h-8 text-jl-green" />
            <h2 class="heading-3 text-white">Features</h2>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(feature, idx) in bike.features"
              :key="idx"
              class="feature-card flex items-center space-x-3 bg-jl-gray rounded-lg p-4 border border-gray-800 hover:border-jl-green transition-all duration-300"
            >
              <div class="w-2 h-2 bg-jl-green rounded-full"></div>
              <span class="text-gray-300">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- Highlights -->
        <div ref="highlightsRef">
          <div class="flex items-center space-x-3 mb-6">
            <Star class="w-8 h-8 text-jl-green" />
            <h2 class="heading-3 text-white">Highlights</h2>
          </div>

          <div class="space-y-4">
            <div
              v-for="(highlight, idx) in bike.highlights"
              :key="idx"
              class="highlight-card flex items-start space-x-3 bg-jl-gray rounded-lg p-4 border border-gray-800"
            >
              <div
                class="w-6 h-6 bg-jl-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-jl-green text-sm font-bold">{{ idx + 1 }}</span>
              </div>
              <p class="text-gray-300 leading-relaxed">{{ highlight }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Bikes -->
      <div ref="relatedRef">
        <div class="flex items-center space-x-3 mb-8">
          <Bike class="w-8 h-8 text-jl-green" />
          <h2 class="heading-3 text-white">You Might Also Like</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <router-link
            v-for="relatedBike in relatedBikes"
            :key="relatedBike.id"
            :to="`/bike/${relatedBike.id}`"
            class="related-card group bg-jl-gray rounded-xl p-4 border border-gray-800 hover:border-jl-green transition-all duration-300"
          >
            <div class="relative h-48 rounded-lg overflow-hidden mb-4">
              <img
                :src="relatedBike.images[0]"
                :alt="relatedBike.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3
              class="text-lg font-semibold text-white group-hover:text-jl-green transition-colors"
            >
              {{ relatedBike.name }}
            </h3>
            <p class="text-sm text-gray-400 mt-1">{{ relatedBike.year }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="section-container py-20 text-center">
      <div
        class="inline-block w-16 h-16 border-4 border-jl-green border-t-transparent rounded-full animate-spin"
      ></div>
      <p class="text-gray-400 mt-4">Loading bike details...</p>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  Bike,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Info,
  MessageCircle,
  Settings,
  Star,
  Zap,
} from 'lucide-vue-next';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { bikesData } from '../data/bikes';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const currentImageIndex = ref(0);

const mainImageRef = ref(null);
const infoRef = ref(null);
const specsRef = ref(null);
const featuresRef = ref(null);
const highlightsRef = ref(null);
const relatedRef = ref(null);

const bike = computed(() => {
  return bikesData.find((b) => b.id === route.params.id);
});

const relatedBikes = computed(() => {
  if (!bike.value) return [];
  return bikesData.filter((b) => b.id !== bike.value.id).slice(0, 3);
});

const formatSpecKey = (key) => {
  return key.replace(/([A-Z])/g, ' $1').trim();
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + bike.value.images.length) % bike.value.images.length;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % bike.value.images.length;
};

const animateElements = () => {
  // Animate main sections
  const sections = [
    { ref: mainImageRef, delay: 0 },
    { ref: infoRef, delay: 0.2 },
    { ref: specsRef, delay: 0.4 },
    { ref: featuresRef, delay: 0.5 },
    { ref: highlightsRef, delay: 0.6 },
    { ref: relatedRef, delay: 0.7 },
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

  // Animate spec cards with stagger
  gsap.from('.spec-card', {
    scrollTrigger: {
      trigger: specsRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.05,
    ease: 'power3.out',
  });

  // Animate feature cards
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: featuresRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Animate highlight cards
  gsap.from('.highlight-card', {
    scrollTrigger: {
      trigger: highlightsRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    x: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Animate related bikes
  gsap.from('.related-card', {
    scrollTrigger: {
      trigger: relatedRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
};

onMounted(() => {
  if (bike.value) {
    animateElements();
  }
});

// Re-animate when route changes
watch(
  () => route.params.id,
  () => {
    currentImageIndex.value = 0;
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is updated
    setTimeout(() => {
      if (bike.value) {
        ScrollTrigger.refresh();
        animateElements();
      }
    }, 100);
  },
);
</script>

<style scoped>
.spec-card:hover .text-gray-400 {
  color: #ff6600;
}
</style>
