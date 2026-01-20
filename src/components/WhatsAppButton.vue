<template>
  <div>
    <!-- WhatsApp Floating Button -->
    <button
      ref="whatsappBtn"
      @click="handleClick"
      class="fixed bottom-8 right-8 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <!-- Ping Animation Ring -->
      <span class="absolute inset-0 rounded-full bg-green-500 animate-ping-slow opacity-75"></span>

      <!-- Button -->
      <div
        class="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle class="w-8 h-8 text-white" :stroke-width="2" />
      </div>

      <!-- Tooltip -->
      <div
        class="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <span class="font-semibold text-sm">Chat with us on WhatsApp</span>
        <div
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white"
        ></div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { MessageCircle } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const whatsappBtn = ref(null);

// WhatsApp number (format: country code + number without + or spaces)
const whatsappNumber = '94779202056';
const message = encodeURIComponent(
  "Hi Honda Hub SL! I'm interested in learning more about your Honda scooters.",
);

const handleClick = () => {
  // GSAP pop animation
  if (whatsappBtn.value) {
    gsap.to(whatsappBtn.value, {
      scale: 0.85,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        // Redirect to WhatsApp after animation
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      },
    });
  }
};

onMounted(() => {
  // Initial entrance animation
  if (whatsappBtn.value) {
    gsap.from(whatsappBtn.value, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 1,
    });
  }
});
</script>
