<template>
    <footer class="bg-white-100 p-4 shadow-md mt-8">
      <div class="container mx-auto text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Links -->
          <div class="flex space-x-6 mb-4 md:mb-0">
            <router-link to="/careers" class="text-black hover:text-teal-300">Careers</router-link>
            <router-link to="/contact" class="text-black hover:text-teal-300">Social Media</router-link>
          </div>
          <!-- Contact Details -->
          <div class="text-black text-sm">
            <p>Contact us: <a href="mailto:info@yourdomain.com" class="underline hover:text-teal-300">info@yourdomain.com</a></p>
            <p>© 2024 South Asian Media UK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  /* Additional styles can go here if needed */
  </style>
  