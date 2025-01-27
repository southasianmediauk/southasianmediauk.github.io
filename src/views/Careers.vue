<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Careers Page Heading -->
      <section class="flex flex-col justify-center items-center py-20 text-center">
        <h1 class="text-5xl font-bold mb-4">Careers at [Your Company]</h1>
        <p class="text-lg mb-12 px-6 md:px-32">
          Join a team that’s dedicated to creating meaningful, multicultural media strategies. Explore our current openings!
        </p>
      </section>
  
      <!-- Current Openings Section -->
      <section class="min-h-screen flex flex-col justify-center items-center px-8 md:px-48 lg:px-64" style="background-color: #1A1A1A;">
        <h2 class="text-4xl font-bold mb-8 text-white">Current Openings</h2>
        <p class="text-lg mb-10 px-6 md:px-32 text-white">
          We're growing and looking for creative minds to join our team. Check out our latest job openings below.
        </p>
  
        <ul class="space-y-6 w-full md:w-2/3">
          <!-- Loop through job openings -->
          <li v-for="(job, index) in jobOpenings" :key="index" class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-bold mb-3">{{ job.title }}</h3>
            <p class="text-gray-400">{{ job.location }}</p>
            <p class="text-gray-400 mb-4">{{ job.description }}</p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
          </li>
        </ul>
      </section>
    </div>
  </template>
  
<script>
export default {
  name: 'Careers',
  data() {
    return {
      jobOpenings: [
        {
          title: 'Media Planner',
          location: 'London, UK',
          description: 'Develop media strategies...'
        },
        // more job listings...
      ]
    };
  }
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
  </style>
  