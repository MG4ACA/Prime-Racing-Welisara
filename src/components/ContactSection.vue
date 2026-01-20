<template>
  <div class="section-container bg-white px-4 md:px-0">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-honda-red mb-4">
        <MapPin class="w-6 h-6" />
        <span class="text-sm font-bold tracking-wider uppercase">Contact Center</span>
      </div>
      <h2 class="heading-2 text-gray-900 mb-4">
        Visit Honda
        <span class="text-honda-red">Hub SL</span>
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto font-medium">
        Experience the finest Japanese engineering in person. Our Malabe showroom is open and our
        team is ready to help you find your perfect ride.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 mb-12">
      <!-- Contact Info -->
      <div class="space-y-6">
        <!-- Location -->
        <div
          class="p-8 bg-gray-50 rounded-3xl border border-gray-100 group transition-all duration-300"
        >
          <div class="flex items-start space-x-6">
            <div
              class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-honda-red transition-all duration-500"
            >
              <MapPin class="w-7 h-7 text-honda-red group-hover:text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Our Showroom</h3>
              <p class="text-gray-600 font-medium leading-relaxed">
                283/8, 5th Lane, Bakmeegaha Road
                <br />
                Kahanthota Rd, Malabe
              </p>
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="p-8 bg-gray-50 rounded-3xl border border-gray-100 group transition-all duration-300"
        >
          <div class="flex items-start space-x-6">
            <div
              class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-honda-red transition-all duration-500"
            >
              <Phone class="w-7 h-7 text-honda-red group-hover:text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Connect With Us</h3>
              <div class="space-y-1">
                <a
                  href="tel:+94779202056"
                  class="block text-lg font-bold text-gray-900 hover:text-honda-red transition-colors"
                >
                  077 920 2056
                </a>
                <a
                  href="https://wa.me/94779202056"
                  target="_blank"
                  class="flex items-center space-x-2 text-gray-600 font-bold hover:text-green-600 transition-colors"
                >
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div
          class="p-8 bg-gray-50 rounded-3xl border border-gray-100 group transition-all duration-300"
        >
          <div class="flex items-start space-x-6">
            <div
              class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-honda-red transition-all duration-500"
            >
              <Mail class="w-7 h-7 text-honda-red group-hover:text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <a
                href="mailto:dalulana@gmail.com"
                class="text-gray-600 font-medium hover:text-honda-red transition-colors"
              >
                dalulana@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Business Hours -->
      <div class="bg-gray-900 rounded-3xl p-10 text-white shadow-2xl shadow-gray-200">
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
            <Clock class="w-7 h-7 text-honda-red" />
          </div>
          <h3 class="text-2xl font-bold uppercase tracking-tight">Business Hours</h3>
        </div>

        <div class="space-y-4">
          <div
            v-for="(hours, day) in businessHours"
            :key="day"
            class="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
          >
            <span class="text-gray-400 font-bold uppercase text-xs tracking-widest">{{ day }}</span>
            <span
              class="font-mono text-sm tracking-tighter"
              :class="hours === 'Closed' ? 'text-honda-red' : 'text-white'"
            >
              {{ hours }}
            </span>
          </div>
        </div>

        <!-- Tagline -->
        <div class="mt-12 p-6 bg-honda-red rounded-2xl text-center">
          <p class="font-bold text-white uppercase tracking-widest text-xs mb-1">
            Authentic Japanese
          </p>
          <p class="text-2xl font-black italic">HONDA HUB SL</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- Social Media -->
      <div class="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex-1">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 bg-honda-red/10 rounded-xl flex items-center justify-center">
            <Share2 class="w-6 h-6 text-honda-red" />
          </div>
          <h3 class="text-xl font-bold text-gray-900">Follow Our Updates</h3>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-honda-red/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
          >
            <component
              :is="social.icon"
              class="w-5 h-5 text-gray-400 group-hover:text-honda-red transition-colors"
            />
            <span
              class="text-gray-600 font-bold group-hover:text-gray-900 transition-colors uppercase text-xs tracking-widest"
            >
              {{ social.name }}
            </span>
          </a>
        </div>
      </div>

      <!-- Map Block -->
      <div
        class="bg-gray-50 rounded-3xl p-4 overflow-hidden border border-gray-100 group cursor-pointer flex-[2]"
      >
        <div class="relative h-64 md:h-full min-h-[300px] bg-gray-200 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916892!2d79.95!3d6.9!"
            class="w-full h-full border-0 group-hover:scale-105 transition-transform duration-700 opacity-90"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Share2,
  Twitter,
  Youtube,
} from 'lucide-vue-next';

const businessHours = {
  Monday: '9:00 AM - 7:00 PM',
  Tuesday: '9:00 AM - 7:00 PM',
  Wednesday: '9:00 AM - 7:00 PM',
  Thursday: '9:00 AM - 7:00 PM',
  Friday: '9:00 AM - 7:00 PM',
  Saturday: '9:00 AM - 6:00 PM',
  Sunday: 'Closed',
};

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: '#',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: '#',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: '#',
  },
];
</script>
