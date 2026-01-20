<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="section-container py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img src="/logo.png" alt="Honda Hub SL Logo" class="h-10 w-auto rounded-lg" />
            <div>
              <h3 class="text-lg font-display font-bold text-gray-900">Honda Hub SL</h3>
              <p class="text-xs text-honda-red">Malabe</p>
            </div>
          </div>
          <p class="text-sm text-gray-600">
            Experience Luxury. Experience Performance. The Home of Genuine Japanese Honda Scooters
            in Malabe.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/inventory"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                Inventory
              </router-link>
            </li>
            <li>
              <router-link
                to="/services"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                Services
              </router-link>
            </li>
            <li>
              <router-link
                to="/test-ride"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                Book Test Ride
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Brands -->
        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Our Models</h4>
          <ul class="space-y-1">
            <li class="text-gray-600 text-sm">Honda ADV 160</li>
            <li class="text-gray-600 text-sm">Honda PCX 160</li>
            <li class="text-gray-600 text-sm">Honda ADV 350</li>
            <li class="text-gray-600 text-sm">Genuine Japanese CR</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-gray-900 font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-3">
            <li class="flex items-start space-x-2">
              <MapPin class="w-4 h-4 text-honda-red mt-0.5 flex-shrink-0" />
              <span class="text-gray-600 text-sm">
                283/8, 5th Lane, Bakmeegaha Road, Kahanthota Rd, Malabe, Sri Lanka
              </span>
            </li>
            <li class="flex items-center space-x-2">
              <Phone class="w-4 h-4 text-honda-red flex-shrink-0" />
              <a
                href="https://wa.me/94779202056"
                target="_blank"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                +94 77 920 2056
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <Mail class="w-4 h-4 text-honda-red flex-shrink-0" />
              <a
                href="mailto:dalulana@gmail.com"
                class="text-gray-600 hover:text-honda-red transition-colors text-sm"
              >
                dalulana@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-gray-500 text-sm text-center md:text-left">
          © {{ currentYear }} Honda Hub SL. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-honda-red hover:scale-110 transition-all duration-300 group"
            :aria-label="social.name"
          >
            <component
              :is="social.icon"
              class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
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
