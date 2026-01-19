# 🚀 Prime Racing Welisara - Setup & Development Guide

## 📋 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Your site will be available at: **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design Features Implemented

### ✨ Animations (GSAP)
- **Hero Section**: Letter-by-letter stagger animation for "Making History"
- **Parallax Effect**: Mouse-controlled parallax on hero background
- **ScrollTrigger**: Bike cards fade & slide up on scroll (50px)
- **Form Animation**: Staggered reveal for each input field
- **WhatsApp Button**: Continuous ping + pop effect on click

### 🎯 Interactive Elements
- **Bike Cards**: Hover effect with 5% image scale & glowing orange border
- **Image Carousel**: Auto-rotate every 5 seconds with manual navigation
- **Modal Specs**: Click "View Full Specs" to see detailed bike information
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Responsive Navbar**: Transforms to mobile menu on small screens

### 🎨 Color Scheme
- **Primary**: KTM Orange (#FF6600)
- **Background**: Black (#000000)
- **Dark Gray**: (#1a1a1a, #2d2d2d)
- **Brand Colors**: Green (Kawasaki), Blue (Yamaha), Red (Triumph)

---

## 📱 Sections Overview

### 1. **Hero Section** (`HeroSection.vue`)
- Animated "Making History" tagline
- Mouse parallax background effect
- CTA buttons (Explore Bikes, Book Test Ride)
- Stats display (10+ years, 500+ bikes sold, 4 brands)

### 2. **About Section** (`AboutSection.vue`)
- Company information
- Featured brands (KTM, Kawasaki, Yamaha, Triumph)
- 4 key features with icons

### 3. **Inventory Grid** (`InventoryGrid.vue`)
- 5 featured motorcycles:
  1. KTM Duke 390 (2026 Edition)
  2. Kawasaki Ninja 300
  3. Honda CB350 RS
  4. Yamaha MT-15
  5. Triumph Street Triple
- Each bike has:
  - 3 rotating images
  - Engine specs & power
  - Features list
  - Detailed specs modal

### 4. **Test Ride Form** (`TestRideForm.vue`)
- Fields: Name, Phone, Email, Bike Model, Date, Time, Message
- GSAP staggered field reveal on scroll
- Form validation
- Success modal after submission

### 5. **Contact Section** (`ContactSection.vue`)
- Address: No. 47, Ragama Road, Welisara
- Phone: +94 77 123 4567, +94 11 234 5678
- Email: info@primeracingwelisara.lk
- Business Hours (Monday-Saturday)
- Social media links (Facebook, Instagram, Twitter, YouTube)
- Google Maps embed

### 6. **Footer** (`Footer.vue`)
- Brand info & quick links
- Contact information
- Social media icons
- Copyright notice

### 7. **WhatsApp Button** (`WhatsAppButton.vue`)
- Fixed floating button (bottom-right)
- Continuous ping animation
- Pop effect on click
- Opens WhatsApp chat with pre-filled message

---

## 🛠️ Customization Guide

### Change WhatsApp Number
**File**: `src/components/WhatsAppButton.vue`
```javascript
const whatsappNumber = '94771234567' // Change this
```

### Update Contact Information
**File**: `src/components/ContactSection.vue`
```javascript
// Update phone numbers, emails, business hours
```

### Add/Remove Bikes
**File**: `src/components/InventoryGrid.vue`
```javascript
const bikes = [
  // Add or modify bike objects here
  {
    name: 'Your Bike Name',
    brand: 'Brand',
    images: ['url1', 'url2', 'url3'],
    specs: { ... },
    features: [ ... ]
  }
]
```

### Change Color Theme
**File**: `tailwind.config.js`
```javascript
colors: {
  'ktm-orange': '#FF6600', // Change primary color
  'ktm-dark': '#1a1a1a',   // Change dark background
}
```

### Modify Business Hours
**File**: `src/components/ContactSection.vue`
```javascript
const businessHours = {
  'Monday': '9:00 AM - 7:00 PM',
  // Modify as needed
}
```

---

## 📦 Project Structure

```
prime-racing-walisara/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.vue              # Navigation bar
│   │   ├── HeroSection.vue         # Hero with animations
│   │   ├── AboutSection.vue        # About company
│   │   ├── InventoryGrid.vue       # Bikes grid
│   │   ├── BikeCard.vue            # Individual bike card
│   │   ├── TestRideForm.vue        # Booking form
│   │   ├── ContactSection.vue      # Contact info
│   │   ├── Footer.vue              # Site footer
│   │   └── WhatsAppButton.vue      # Floating WhatsApp
│   ├── App.vue                     # Main app component
│   ├── main.js                     # App entry point
│   └── style.css                   # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎭 Animation Details

### Hero Section Letter Animation
```javascript
gsap.to(headingElement.children, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.05,      // 50ms delay between letters
  ease: 'power3.out',
  delay: 0.3
})
```

### Bike Card ScrollTrigger
```javascript
ScrollTrigger.create({
  trigger: cardRef.value,
  start: 'top 80%',    // Trigger when card is 80% in viewport
  onEnter: () => {
    gsap.to(cardRef.value, {
      opacity: 1,
      y: 0,              // Slide up 50px
      duration: 0.8,
      delay: index * 0.1  // Stagger by index
    })
  }
})
```

### Form Field Stagger
```javascript
gsap.to(field.value, {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: 'power3.out',
  delay: index * 0.1   // Each field animates 100ms after previous
})
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive and tested on mobile devices.

---

## 🔧 Tech Stack Details

- **Vue 3.4.15**: Composition API with `<script setup>`
- **GSAP 3.12.5**: Advanced animations & ScrollTrigger
- **Tailwind CSS 3.4.1**: Utility-first CSS with dark mode
- **Lucide Vue Next 0.314.0**: Beautiful icon set
- **Vite 5.0.11**: Lightning-fast build tool

---

## 🚀 Deployment

### Option 1: Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: Traditional Hosting
1. Run: `npm run build`
2. Upload `dist/` folder to your hosting
3. Point domain to `dist/index.html`

---

## 🎯 Performance Tips

- ✅ Images are lazy-loaded
- ✅ GSAP animations use GPU acceleration
- ✅ Tailwind CSS is purged in production
- ✅ Code is minified and tree-shaken
- ✅ Font files are preloaded

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution**: Check browser console for GSAP import errors

### Issue: Styles not applying
**Solution**: Run `npm run build` to regenerate Tailwind CSS

### Issue: WhatsApp not opening
**Solution**: Verify `whatsappNumber` format (no + or spaces)

---

## 📞 Support

For questions or customization help:
- Email: dev@primeracingwelisara.lk
- Phone: +94 77 123 4567

---

## 🎉 Credits

Designed & Developed with ❤️ for Prime Racing Welisara
Tech Stack: Vue 3 + GSAP + Tailwind CSS

**Making History, One Ride at a Time** 🏍️
