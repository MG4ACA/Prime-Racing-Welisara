<template>
  <div class="section-container">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="flex items-center justify-center space-x-2 text-ktm-orange mb-4">
        <MapPin class="w-6 h-6" />
        <span class="text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
      </div>
      <h2 class="heading-2 text-white mb-4">
        Visit Our
        <span class="gradient-text">Showroom</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Come experience our motorcycles in person. Our expert team is ready to assist you.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="space-y-8">
        <!-- Location -->
        <div class="card group cursor-pointer">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-ktm-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ktm-orange/20 transition-colors duration-300"
            >
              <MapPin class="w-6 h-6 text-ktm-orange" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Address</h3>
              <p class="text-gray-400">
                No. 47, Ragama Road
                <br />
                Welisara, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div class="card group cursor-pointer">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-ktm-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ktm-orange/20 transition-colors duration-300"
            >
              <Phone class="w-6 h-6 text-ktm-orange" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Phone</h3>
              <a
                href="tel:+94771234567"
                class="text-gray-400 hover:text-ktm-orange transition-colors"
              >
                +94 77 123 4567
              </a>
              <br />
              <a
                href="tel:+94112345678"
                class="text-gray-400 hover:text-ktm-orange transition-colors"
              >
                +94 11 234 5678
              </a>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="card group cursor-pointer">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-ktm-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ktm-orange/20 transition-colors duration-300"
            >
              <Mail class="w-6 h-6 text-ktm-orange" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:info@primeracingwelisara.lk"
                class="text-gray-400 hover:text-ktm-orange transition-colors"
              >
                info@primeracingwelisara.lk
              </a>
              <br />
              <a
                href="mailto:sales@primeracingwelisara.lk"
                class="text-gray-400 hover:text-ktm-orange transition-colors"
              >
                sales@primeracingwelisara.lk
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Business Hours & Social -->
      <div class="space-y-8">
        <!-- Business Hours -->
        <div class="card">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-ktm-orange/10 rounded-lg flex items-center justify-center">
              <Clock class="w-6 h-6 text-ktm-orange" />
            </div>
            <h3 class="text-xl font-semibold text-white">Business Hours</h3>
          </div>

          <div class="space-y-3">
            <div
              v-for="(hours, day) in businessHours"
              :key="day"
              class="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
            >
              <span class="text-gray-400">{{ day }}</span>
              <span
                class="font-semibold"
                :class="hours === 'Closed' ? 'text-red-500' : 'text-white'"
              >
                {{ hours }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <!-- Social Media -->
      <div class="card">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 bg-ktm-orange/10 rounded-lg flex items-center justify-center">
            <Share2 class="w-6 h-6 text-ktm-orange" />
          </div>
          <h3 class="text-xl font-semibold text-white">Follow Us</h3>
        </div>

        <div class="grid gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-3 p-3 bg-ktm-dark rounded-lg border border-gray-800 hover:border-ktm-orange hover:bg-ktm-orange/5 transition-all duration-300 group"
          >
            <component
              :is="social.icon"
              class="w-5 h-5 text-gray-400 group-hover:text-ktm-orange transition-colors"
            />
            <span class="text-gray-400 group-hover:text-white transition-colors">
              {{ social.name }}
            </span>
          </a>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="card p-0 overflow-hidden group cursor-pointer ml-6" style="width: 60vw">
        <div class="relative h-96 bg-ktm-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4267!2d79.9!3d7.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDAuMCJOIDc5wrA1NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
            class="w-full h-full border-0 group-hover:scale-105 transition-transform duration-500"
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
    url: 'https://facebook.com/primeracingwelisara',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/primeracingwelisara',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/primeracingwel',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@primeracingwelisara',
  },
];
</script>
