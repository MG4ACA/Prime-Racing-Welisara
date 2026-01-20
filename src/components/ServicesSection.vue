<template>
  <div class="section-container">
    <!-- Section Header -->
    <div class="text-center mb-16 px-4">
      <div class="flex items-center justify-center space-x-2 text-honda-red mb-4">
        <Wrench class="w-6 h-6" />
        <span class="text-sm font-semibold tracking-wider uppercase">Our Premium Standards</span>
      </div>
      <h2 class="heading-2 text-gray-900 mb-4">
        Japanese Excellence in
        <span class="text-honda-red">Every Mile</span>
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        At Honda Hub SL, we bridge the gap between Japan and Malabe, ensuring that every motorcycle
        we deliver meets the highest standards of Japanese engineering and authenticity.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      <div
        v-for="(service, index) in services"
        :key="index"
        ref="serviceRefs"
        class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-honda-red/30 transition-all duration-500 group"
      >
        <!-- Icon -->
        <div
          class="w-16 h-16 bg-honda-red/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-honda-red group-hover:rotate-6 transition-all duration-500"
        >
          <component
            :is="service.icon"
            class="w-8 h-8 text-honda-red group-hover:text-white transition-colors"
          />
        </div>

        <!-- Content -->
        <h3
          class="text-xl font-bold text-gray-900 mb-3 group-hover:text-honda-red transition-colors"
        >
          {{ service.name }}
        </h3>
        <p class="text-gray-500 text-sm mb-6 leading-relaxed">{{ service.description }}</p>

        <!-- Features -->
        <ul class="space-y-3">
          <li v-for="feature in service.features" :key="feature" class="flex items-start space-x-3">
            <Check class="w-5 h-5 text-honda-red flex-shrink-0 mt-0.5" />
            <span class="text-sm text-gray-700 font-medium">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ClipboardCheck, ShieldCheck, Ship, Wrench } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const serviceRefs = ref([]);

const services = [
  {
    name: 'Direct Japan Sourcing',
    description: 'Every bike is hand-selected from premier Japanese export houses.',
    icon: Ship,
    features: ['Auction Grade 5/6', 'Export Certification', 'Direct Shipment', 'BDS/JU Sourced'],
  },
  {
    name: '0-Mileage Guarantee',
    description: 'We specialize in pristine, never-before-ridden motorcycles.',
    icon: ClipboardCheck,
    features: [
      'Zero km Verification',
      'Pristine Aesthetics',
      'Factory Condition',
      'Genuine Imports',
    ],
  },
  {
    name: 'Authorized Papers',
    description: 'Clean, transparent documentation for complete peace of mind.',
    icon: ShieldCheck,
    features: ['Genuine CR Issued', 'One-Day Registration', 'Duty Paid Docs', 'Clear Ownership'],
  },
  {
    name: 'Elite Support',
    description: 'Premium after-sales support for the life of your Honda.',
    icon: Wrench,
    features: ['Honda Diagnostics', 'Genuine Spares', 'Expert Technicians', 'Maintenance Plans'],
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
