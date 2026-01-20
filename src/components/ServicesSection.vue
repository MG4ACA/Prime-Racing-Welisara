<template>
  <div class="section-container">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-ktm-orange mb-4">
        <Wrench class="w-6 h-6" />
        <span class="text-sm font-semibold tracking-wider uppercase">Our Services</span>
      </div>
      <h2 class="heading-2 text-white mb-4">
        Complete Motorcycle
        <span class="gradient-text">Care Solutions</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        From maintenance to customization, we provide comprehensive services to keep your motorcycle
        running at peak performance.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        ref="serviceRefs"
        class="card group hover:border-ktm-orange/50 transition-all duration-300"
      >
        <!-- Icon -->
        <div
          class="w-14 h-14 bg-ktm-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ktm-orange/20 transition-colors"
        >
          <component :is="service.icon" class="w-8 h-8 text-ktm-orange" />
        </div>

        <!-- Content -->
        <h3 class="text-xl font-semibold text-white mb-2">{{ service.name }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ service.description }}</p>

        <!-- Features -->
        <ul class="space-y-2">
          <li v-for="feature in service.features" :key="feature" class="flex items-start space-x-2">
            <Check class="w-4 h-4 text-ktm-orange flex-shrink-0 mt-0.5" />
            <span class="text-sm text-gray-300">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Palette, Shield, Wrench, Zap } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const serviceRefs = ref([]);

const services = [
  {
    name: 'Maintenance & Service',
    description: 'Regular maintenance and servicing to keep your bike in top condition.',
    icon: Wrench,
    features: ['Oil and filter changes', 'Brake inspection', 'Chain maintenance', 'Tire rotation'],
  },
  {
    name: 'Performance Upgrade',
    description: 'Enhance your motorcycle performance with quality upgrades.',
    icon: Zap,
    features: ['ECU tuning', 'Exhaust systems', 'Air filters', 'Suspension upgrades'],
  },
  {
    name: 'Warranty & Protection',
    description: 'Comprehensive coverage for your investment.',
    icon: Shield,
    features: ['Extended warranty', 'Roadside assistance', 'Insurance support', 'Damage coverage'],
  },
  {
    name: 'Custom Modifications',
    description: 'Personalize your ride with custom modifications.',
    icon: Palette,
    features: [
      'Custom paint jobs',
      'Bodykit installation',
      'Graphics design',
      'Seat customization',
    ],
  },
];

onMounted(() => {
  serviceRefs.value.forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      },
    );
  });
});
</script>
