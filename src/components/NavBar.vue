<template>
    <nav class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-white bg-transparent backdrop-blur-md z-50">
      <!-- Logo -->
      <div class="text-2xl font-bold tracking-wide">South Asian Media UK</div>
  
      <!-- Navigation Links -->
      <ul class="hidden md:flex space-x-8 text-lg">
        <li>
          <a href="#" class="relative px-3 py-2 transition duration-300 hover:text-teal-300">
            About
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#" class="relative px-3 py-2 transition duration-300 hover:text-teal-300">
            Services
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#" class="relative px-3 py-2 transition duration-300 hover:text-teal-300">
            Portfolio
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
  
      <!-- Mobile Menu Button -->
      <button class="md:hidden text-2xl focus:outline-none">
        ☰
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  nav {
    font-family: inherit;
  }
  </style>
  