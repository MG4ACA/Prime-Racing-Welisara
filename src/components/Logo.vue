<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Racing Helmet Silhouette -->
    <path
      d="M24 8C18.5 8 14 11.5 12 16.5C11 18.5 10.5 21 10.5 23.5C10.5 26 11 28.5 12 30.5C13 32.5 14.5 34 16.5 35C18.5 36 20.5 36.5 23 36.5H25C27.5 36.5 29.5 36 31.5 35C33.5 34 35 32.5 36 30.5C37 28.5 37.5 26 37.5 23.5C37.5 21 37 18.5 36 16.5C34 11.5 29.5 8 24 8Z"
      :fill="iconColor"
      opacity="0.9"
    />

    <!-- Visor -->
    <path
      d="M13 22C13 22 14 18 18 16C22 14 26 14 30 16C34 18 35 22 35 22L30 24C30 24 28 21 24 21C20 21 18 24 18 24L13 22Z"
      fill="black"
      opacity="0.6"
    />

    <!-- Racing Stripe -->
    <path d="M22 12L20 36H22L24 12H22Z" :fill="accentColor" />
    <path d="M26 12L28 36H26L24 12H26Z" :fill="accentColor" />

    <!-- Speed Lines -->
    <path d="M8 24H11" :stroke="accentColor" stroke-width="2" stroke-linecap="round" />
    <path
      d="M8 20H10"
      :stroke="accentColor"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.7"
    />
    <path
      d="M8 28H10"
      :stroke="accentColor"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.7"
    />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 48,
  },
  height: {
    type: [String, Number],
    default: 48,
  },
  iconColor: {
    type: String,
    default: 'currentColor',
  },
  accentColor: {
    type: String,
    default: '#FF6600',
  },
  className: {
    type: String,
    default: '',
  },
});
</script>
