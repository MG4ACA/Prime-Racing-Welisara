<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-jl-dark to-black"></div>
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute inset-0"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6600' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);
        "
      ></div>
    </div>

    <!-- Parallax Image Carousel Container -->
    <div ref="parallaxContainer" class="absolute inset-0 opacity-30" @mousemove="handleMouseMove">
      <div
        ref="parallaxImage"
        class="w-full h-full bg-cover bg-center transition-all duration-1000 ease-out"
        :style="{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
        }"
      ></div>
    </div>

    <!-- Image Navigation Dots -->
    <div
      class="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5 sm:space-x-2"
    >
      <button
        v-for="(_, index) in heroImages"
        :key="index"
        @click="currentImageIndex = index"
        :class="[
          'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300',
          currentImageIndex === index
            ? 'bg-ktm-orange sm:w-8 w-6'
            : 'bg-gray-400 hover:bg-gray-300',
        ]"
      ></button>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-container text-center">
      <div class="space-y-8">
        <!-- Subtitle -->
        <!-- <div class="flex items-center justify-center space-x-1 sm:space-x-2 text-ktm-orange">
          <div class="hidden sm:block w-12 h-0.5 bg-ktm-orange"></div>
          <Zap class="w-4 sm:w-5 h-4 sm:h-5" :stroke-width="2" />
          <span class="text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Premium Motorcycles
          </span>
          <Zap class="w-4 sm:w-5 h-4 sm:h-5" :stroke-width="2" />
          <div class="hidden sm:block w-12 h-0.5 bg-ktm-orange"></div>
        </div> -->

        <!-- Main Heading with GSAP Letter Animation -->
        <h1 class="heading-1 text-white">
          <span ref="headingRef" class="block"></span>
        </h1>

        <!-- Description -->
        <p
          class="text-sm sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Experience the thrill of premium
          <span class="text-ktm-orange font-semibold">KTM</span>
          ,
          <span class="text-ktm-orange font-semibold">Kawasaki</span>
          ,
          <span class="text-ktm-orange font-semibold">Yamaha</span>
          , and
          <span class="text-ktm-orange font-semibold">Triumph</span>
          motorcycles
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-8 px-4"
        >
          <router-link to="/inventory" class="btn-primary w-full sm:w-auto text-sm sm:text-base">
            <span class="flex items-center justify-center gap-1 sm:gap-2">
              <span class="hidden sm:inline">Explore Bikes</span>
              <span class="sm:hidden">Explore</span>
              <ArrowRight class="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
          </router-link>
          <router-link to="/test-ride" class="btn-secondary w-full sm:w-auto text-sm sm:text-base">
            <span class="flex items-center justify-center gap-1 sm:gap-2">
              <span class="hidden sm:inline">Book Test Ride</span>
              <span class="sm:hidden">Book Ride</span>
              <Calendar class="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
          </router-link>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-6 sm:pt-12 px-4">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-ktm-orange">10+</div>
            <div class="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Years Exp</div>
          </div>
          <div class="text-center border-x border-gray-800">
            <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-ktm-orange">500+</div>
            <div class="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Bikes Sold</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-ktm-orange">4</div>
            <div class="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Brands</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown class="w-8 h-8 text-jl-green" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const headingRef = ref(null);
const parallaxContainer = ref(null);
const parallaxImage = ref(null);
const parallaxX = ref(0);
const parallaxY = ref(0);
const currentImageIndex = ref(0);

// Hero carousel images - using Pexels motorcycle images (more reliable)
const heroImages = [
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&q=80',
  'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1200&q=80',
  'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=1200&q=80',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&q=80',
  'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1200&q=80',
];

let carouselInterval;

const handleMouseMove = (e) => {
  if (!parallaxContainer.value) return;

  const rect = parallaxContainer.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate parallax offset (max 20px movement)
  parallaxX.value = ((x - centerX) / centerX) * 20;
  parallaxY.value = ((y - centerY) / centerY) * 20;
};

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
  }, 5000); // Change image every 5 seconds
};

const stopCarousel = () => {
  clearInterval(carouselInterval);
};

onMounted(() => {
  // Start carousel
  startCarousel();

  // Letter-by-letter animation for "Making History"
  const text = 'Making History';
  const headingElement = headingRef.value;

  if (headingElement) {
    // Clear the element
    headingElement.innerHTML = '';

    // Create spans for each letter
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      headingElement.appendChild(span);
    });

    // Animate letters with stagger
    gsap.to(headingElement.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.3,
      onStart: function () {
        gsap.set(this.targets(), { y: 50 });
      },
    });
  }
});

onUnmounted(() => {
  stopCarousel();
});
</script>
