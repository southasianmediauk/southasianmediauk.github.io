<template>
  <footer class="bg-white-100 p-6 shadow-md mt-4"> <!-- Reduced from mt-8 to mt-4 -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <!-- Links Section -->
      <div>
        <h3 class="text-lg font-semibold text-black mb-2">Quick Links</h3>
        <router-link to="/careers" class="block text-gray-600 hover:text-teal-500">Careers</router-link>
      </div>

      <!-- Contact Details Section -->
      <div>
        <h3 class="text-lg font-semibold text-black mb-2">Contact Us</h3>
        <p class="text-gray-600">Phone: 02036 212 947</p>
        <p class="text-gray-600">Mobile: 07508 335 340</p>
        <p class="text-gray-600">
          Email: 
          <a href="mailto:ahmed@banglamedia.co.uk" class="underline text-teal-500 hover:text-teal-700">
            ahmed@banglamedia.co.uk
          </a>
        </p>
      </div>

      <!-- Office Address Section -->
      <div>
        <h3 class="text-lg font-semibold text-black mb-2">Visit Us</h3>
        <p class="text-gray-600">259 Whitechapel Road (2nd Floor)</p>
        <p class="text-gray-600">London, E1 1DB</p>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="text-center text-gray-500 text-sm mt-6 border-t pt-4">
      © 2024 South Asian Media UK. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
