<template>
  <div class="section-container bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center space-x-2 text-honda-red mb-4">
          <Calendar class="w-6 h-6" />
          <span class="text-sm font-bold tracking-wider uppercase">VIRTUAL APPOINTMENT</span>
        </div>
        <h2 class="heading-2 text-gray-900 mb-4">
          Schedule Your
          <span class="text-honda-red">Priority View</span>
        </h2>
        <p class="text-gray-600 font-medium">
          Interested in a specific model? Book a viewing or inquiry at our Malabe showroom.
        </p>
      </div>

      <!-- Form -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-xl shadow-gray-100 grid md:grid-cols-2 gap-6"
      >
        <!-- Name Field -->
        <div ref="field1" class="form-field">
          <label
            for="name"
            class="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2"
          >
            Full Name
          </label>
          <div class="relative">
            <User class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              placeholder="Your Name"
              class="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-300 focus:border-honda-red focus:outline-none focus:ring-4 focus:ring-honda-red/5 transition-all shadow-sm"
            />
          </div>
        </div>

        <!-- Phone Field -->
        <div ref="field2" class="form-field">
          <label
            for="phone"
            class="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2"
          >
            Mobile Number
          </label>
          <div class="relative">
            <Phone class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              required
              placeholder="077 XXX XXXX"
              class="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-300 focus:border-honda-red focus:outline-none focus:ring-4 focus:ring-honda-red/5 transition-all shadow-sm"
            />
          </div>
        </div>

        <!-- Bike Model Selection -->
        <div ref="field4" class="form-field">
          <label
            for="bike"
            class="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2"
          >
            Honda Model
          </label>
          <div class="relative">
            <Bike class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="bike"
              v-model="formData.bike"
              required
              class="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 focus:border-honda-red focus:outline-none focus:ring-4 focus:ring-honda-red/5 transition-all appearance-none cursor-pointer shadow-sm"
            >
              <option value="" disabled>Select Model</option>
              <option v-for="bike in bikes" :key="bike.id" :value="bike.name">
                {{ bike.name }}
              </option>
            </select>
            <ChevronDown
              class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        <!-- Date Field -->
        <div ref="field5" class="form-field">
          <label
            for="date"
            class="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2"
          >
            Preferred Date
          </label>
          <div class="relative">
            <CalendarDays class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="date"
              v-model="formData.date"
              type="date"
              required
              :min="minDate"
              class="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 focus:border-honda-red focus:outline-none focus:ring-4 focus:ring-honda-red/5 transition-all shadow-sm"
            />
          </div>
        </div>

        <!-- Message Field -->
        <div ref="field7" class="form-field col-span-1 md:col-span-2">
          <label
            for="message"
            class="block text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-2"
          >
            Additional Notes
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            placeholder="Any specific questions regarding Japanese imports?"
            class="w-full px-4 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder-gray-300 focus:border-honda-red focus:outline-none focus:ring-4 focus:ring-honda-red/5 transition-all resize-none shadow-sm"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div ref="field8" class="col-span-1 md:col-span-2 pt-4">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-honda-red transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-xl hover:shadow-honda-red/20 shadow-gray-200"
          >
            <template v-if="!isSubmitting">
              <span>Send Priority Inquiry</span>
              <Send class="w-5 h-5" />
            </template>
            <template v-else>
              <div
                class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"
              ></div>
              <span>Sending...</span>
            </template>
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="showSuccess"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-md"
        >
          <div
            class="bg-white rounded-[2.5rem] p-10 max-w-md w-full border border-gray-100 text-center shadow-2xl"
          >
            <div
              class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle class="w-12 h-12 text-green-500" />
            </div>
            <h3 class="text-3xl font-black text-gray-900 mb-2">Inquiry Sent</h3>
            <p class="text-gray-500 mb-8 font-medium">
              We've received your request. A Honda Hub SL representative will reach out via WhatsApp
              soon.
            </p>
            <button
              @click="closeSuccess"
              class="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-honda-red transition-all shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import {
  Bike,
  Calendar,
  CalendarDays,
  CheckCircle,
  ChevronDown,
  Phone,
  Send,
  User,
} from 'lucide-vue-next';
import { computed, onMounted, ref } from 'vue';
import { bikesData as bikes } from '../data/bikes';

const formData = ref({
  name: '',
  phone: '',
  bike: '',
  date: '',
  message: '',
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});

const field1 = ref(null);
const field2 = ref(null);
const field4 = ref(null);
const field5 = ref(null);
const field7 = ref(null);
const field8 = ref(null);

onMounted(() => {
  const fields = [
    field1.value,
    field2.value,
    field4.value,
    field5.value,
    field7.value,
    field8.value,
  ];

  fields.forEach((field, index) => {
    if (field) {
      gsap.fromTo(
        field,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: field,
            start: 'top 90%',
            once: true,
          },
        },
      );
    }
  });
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSubmitting.value = false;
  showSuccess.value = true;
  formData.value = {
    name: '',
    phone: '',
    bike: '',
    date: '',
    message: '',
  };
};

const closeSuccess = () => {
  showSuccess.value = false;
};
</script>
