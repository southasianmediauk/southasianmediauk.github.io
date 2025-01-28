<template>
  <div class="space-y-0">
    <!-- Parallax Banner Section -->
    <section class="relative min-h-screen flex items-center justify-center text-white py-20">
      <!-- Parallax Background -->
      <div class="absolute inset-0 bg-cover bg-center" 
           :style="{ backgroundImage: `url(${require('@/assets/background.jpg')})` }">
      </div>

      <!-- Banner Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>

      <!-- Banner Text -->
      <div class="text-center relative z-10">
        <h1 class="text-5xl font-bold mb-4">
          <span v-text="typingText"></span><span v-if="isTyping">|</span>
        </h1>
        <p class="text-lg">
          <span v-text="subHeadingText"></span>
        </p>
      </div>
    </section>

    <!-- Other content here -->

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      typingText: '',
      subHeadingText: 'Bridging UK Brands with Asia’s Diverse Audiences',
      fullText: 'Media Has Landed!',
      isTyping: true,
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      let i = 0;
      const typingSpeed = 150; // Typing speed in ms
      const text = this.fullText;

      // Typing effect for heading
      const interval = setInterval(() => {
        this.typingText += text[i];
        i++;
        if (i === text.length) {
          clearInterval(interval);
          this.isTyping = false; // Remove the cursor after typing
        }
      }, typingSpeed);
    },
  },
};
</script>

<style scoped>
/* Parallax Effect */
section {
  position: relative;
  overflow: hidden;
}

/* Remove extra spacing between sections */
.space-y-0 > * {
  margin-bottom: 0;
}

/* Improve Parallax Performance */
.bg-cover {
  background-attachment: fixed;
  transform: translateZ(0);
}

/* Add cursor blinking effect */
span[isTyping] {
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
