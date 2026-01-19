<template>
  <div class="section-container">
    <div class="max-w-3xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center space-x-2 text-ktm-orange mb-4">
          <Calendar class="w-6 h-6" />
          <span class="text-sm font-semibold tracking-wider uppercase">Book a Test Ride</span>
        </div>
        <h2 class="heading-2 text-white mb-4">
          Experience the <span class="gradient-text">Thrill</span>
        </h2>
        <p class="text-gray-400">
          Schedule a test ride and feel the power of your dream motorcycle
        </p>
      </div>
      
      <!-- Form -->
      <form 
        @submit.prevent="handleSubmit"
        class="bg-ktm-gray rounded-xl p-8 border border-gray-800 space-y-6"
      >
        <!-- Name Field -->
        <div ref="field1" class="form-field">
          <label for="name" class="block text-sm font-semibold text-white mb-2">
            Full Name *
          </label>
          <div class="relative">
            <User class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              id="name"
              v-model="formData.name"
              type="text"
              required
              placeholder="John Doe"
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all"
            />
          </div>
        </div>
        
        <!-- Phone Field -->
        <div ref="field2" class="form-field">
          <label for="phone" class="block text-sm font-semibold text-white mb-2">
            Phone Number *
          </label>
          <div class="relative">
            <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              id="phone"
              v-model="formData.phone"
              type="tel"
              required
              placeholder="+94 77 123 4567"
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all"
            />
          </div>
        </div>
        
        <!-- Email Field -->
        <div ref="field3" class="form-field">
          <label for="email" class="block text-sm font-semibold text-white mb-2">
            Email Address *
          </label>
          <div class="relative">
            <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              id="email"
              v-model="formData.email"
              type="email"
              required
              placeholder="john@example.com"
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all"
            />
          </div>
        </div>
        
        <!-- Bike Model Selection -->
        <div ref="field4" class="form-field">
          <label for="bike" class="block text-sm font-semibold text-white mb-2">
            Preferred Motorcycle *
          </label>
          <div class="relative">
            <Bike class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select 
              id="bike"
              v-model="formData.bike"
              required
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a motorcycle</option>
              <option value="KTM Duke 390">KTM Duke 390 (2026 Edition)</option>
              <option value="Kawasaki Ninja 300">Kawasaki Ninja 300</option>
              <option value="Honda CB350 RS">Honda CB350 RS</option>
              <option value="Yamaha MT-15">Yamaha MT-15</option>
              <option value="Triumph Street Triple">Triumph Street Triple</option>
            </select>
            <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        <!-- Date Field -->
        <div ref="field5" class="form-field">
          <label for="date" class="block text-sm font-semibold text-white mb-2">
            Preferred Date *
          </label>
          <div class="relative">
            <CalendarDays class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              id="date"
              v-model="formData.date"
              type="date"
              required
              :min="minDate"
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all"
            />
          </div>
        </div>
        
        <!-- Time Field -->
        <div ref="field6" class="form-field">
          <label for="time" class="block text-sm font-semibold text-white mb-2">
            Preferred Time *
          </label>
          <div class="relative">
            <Clock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select 
              id="time"
              v-model="formData.time"
              required
              class="w-full pl-11 pr-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a time slot</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
            <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        <!-- Message Field -->
        <div ref="field7" class="form-field">
          <label for="message" class="block text-sm font-semibold text-white mb-2">
            Additional Notes (Optional)
          </label>
          <textarea 
            id="message"
            v-model="formData.message"
            rows="4"
            placeholder="Any specific requirements or questions?"
            class="w-full px-4 py-3 bg-ktm-dark border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-ktm-orange focus:outline-none focus:ring-2 focus:ring-ktm-orange/20 transition-all resize-none"
          ></textarea>
        </div>
        
        <!-- Submit Button -->
        <div ref="field8" class="form-field">
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Send class="w-5 h-5" />
            <span>{{ isSubmitting ? 'Submitting...' : 'Book Test Ride' }}</span>
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
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div class="bg-ktm-gray rounded-xl p-8 max-w-md w-full border border-green-500 text-center">
            <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle class="w-10 h-10 text-green-500" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
            <p class="text-gray-400 mb-6">
              We've received your test ride request. Our team will contact you shortly to confirm the details.
            </p>
            <button 
              @click="closeSuccess"
              class="btn-primary w-full"
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
import { ref, computed, onMounted } from 'vue'
import { Calendar, User, Phone, Mail, Bike, CalendarDays, Clock, ChevronDown, Send, CheckCircle } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const field1 = ref(null)
const field2 = ref(null)
const field3 = ref(null)
const field4 = ref(null)
const field5 = ref(null)
const field6 = ref(null)
const field7 = ref(null)
const field8 = ref(null)

const formData = ref({
  name: '',
  phone: '',
  email: '',
  bike: '',
  date: '',
  time: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const minDate = computed(() => {
  const today = new Date()
  today.setDate(today.getDate() + 1) // Minimum tomorrow
  return today.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Show success message
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset form
  formData.value = {
    name: '',
    phone: '',
    email: '',
    bike: '',
    date: '',
    time: '',
    message: ''
  }
}

const closeSuccess = () => {
  showSuccess.value = false
}

onMounted(() => {
  const fields = [field1, field2, field3, field4, field5, field6, field7, field8]
  
  fields.forEach((field, index) => {
    if (field.value) {
      // Set initial state
      gsap.set(field.value, {
        opacity: 0,
        y: 30
      })
      
      // Animate on scroll
      ScrollTrigger.create({
        trigger: field.value,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(field.value, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            delay: index * 0.1
          })
        },
        once: true
      })
    }
  })
})
</script>
