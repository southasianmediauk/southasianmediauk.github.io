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

    <!-- Quick Service Overview -->
    <section class="min-h-screen flex flex-col justify-center items-center px-8 md:px-48 lg:px-64" style="background-color: #1A1A1A;" text-center>
      <h2 class="text-4xl font-bold mb-8 text-white">Our Services</h2>
      <p class="text-lg mb-10 px-6 md:px-32 text-white">
        We offer a range of media services tailored to connect with diverse communities. Our expertise spans strategic planning, marketing execution, and creative solutions to drive impactful results.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        <!-- Media Planning & Buying -->
        <div class="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-bold mb-3">Media Planning & Buying</h3>
          <p class="text-gray-400 text-sm">
            We develop tailored media strategies to optimise reach and engagement across multiple platforms.
          </p>
        </div>

        <!-- Digital Marketing -->
        <div class="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-bold mb-3">Digital Marketing</h3>
          <p class="text-gray-400 text-sm">
            From social media to search engine marketing, we create campaigns that drive results and brand awareness.
          </p>
        </div>

        <!-- Creative Strategy -->
        <div class="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-bold mb-3">Creative Strategy</h3>
          <p class="text-gray-400 text-sm">
            We craft compelling visuals and messaging to help brands connect with audiences in meaningful ways.
          </p>
        </div>

        <!-- Multicultural Marketing -->
        <div class="bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-bold mb-3">Multicultural Marketing</h3>
          <p class="text-gray-400 text-sm">
            Specialising in culturally relevant campaigns that engage and resonate with diverse communities.
          </p>
        </div>
      </div>
    </section>
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
