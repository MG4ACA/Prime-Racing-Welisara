<template>
  <footer class="bg-ktm-dark border-t border-gray-800">
    <div class="section-container py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img src="/logo.png" alt="Prime Racing Logo" class="h-10 w-auto rounded-lg" />
            <div>
              <h3 class="text-lg font-display font-bold text-white">Prime Racing</h3>
              <p class="text-xs text-ktm-orange">Welisara</p>
            </div>
          </div>
          <p class="text-sm text-gray-400">
            Your trusted partner for premium motorcycles in Sri Lanka. Making history, one ride at a
            time.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/inventory"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                Inventory
              </router-link>
            </li>
            <li>
              <router-link
                to="/services"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                Services
              </router-link>
            </li>
            <li>
              <router-link
                to="/test-ride"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                Book Test Ride
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Brands -->
        <div>
          <h4 class="text-white font-semibold mb-4">Our Brands</h4>
          <ul class="space-y-2">
            <li class="text-ktm-orange text-sm">KTM</li>
            <li class="text-green-500 text-sm">Kawasaki</li>
            <li class="text-blue-500 text-sm">Yamaha</li>
            <li class="text-red-500 text-sm">Triumph</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-3">
            <li class="flex items-start space-x-2">
              <MapPin class="w-4 h-4 text-ktm-orange mt-0.5 flex-shrink-0" />
              <span class="text-gray-400 text-sm">No. 47, Ragama Road, Welisara</span>
            </li>
            <li class="flex items-center space-x-2">
              <Phone class="w-4 h-4 text-ktm-orange flex-shrink-0" />
              <a
                href="tel:+94771234567"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                +94 77 123 4567
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <Mail class="w-4 h-4 text-ktm-orange flex-shrink-0" />
              <a
                href="mailto:info@primeracingwelisara.lk"
                class="text-gray-400 hover:text-ktm-orange transition-colors text-sm"
              >
                info@primeracingwelisara.lk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-gray-500 text-sm text-center md:text-left">
          © {{ currentYear }} Prime Racing Welisara. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-ktm-gray rounded-lg flex items-center justify-center hover:bg-ktm-orange hover:scale-110 transition-all duration-300 group"
            :aria-label="social.name"
          >
            <component
              :is="social.icon"
              class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-vue-next';
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

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
