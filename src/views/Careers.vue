<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Careers Page Heading -->
      <section class="flex flex-col justify-center items-center py-20 text-center">
        <h1 class="text-5xl font-bold mb-4">Careers</h1>
        <p class="text-lg mb-12 px-6 md:px-32">
          Join a team that’s dedicated to creating meaningful, multicultural media strategies. Explore our current openings!
        </p>
      </section>
  
      <!-- Current Openings Section -->
      <section class="min-h-screen flex flex-col justify-center items-center px-8 md:px-48 lg:px-64" style="background-color: #1A1A1A;">
        <h2 class="text-4xl font-bold mb-8 text-white">Current Openings</h2>
  
        <ul class="space-y-6 w-full md:w-2/3">
          <!-- Loop through job openings -->
          <li v-for="(job, index) in jobOpenings" :key="index" class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 class="text-xl font-bold mb-3">{{ job.title }}</h3>
            <p class="text-gray-400">{{ job.location }}</p>

            <!-- Toggle Description -->
            <button @click="toggleDescription(index)" class="text-blue-400 hover:underline mt-2">
              {{ job.showDetails ? 'Hide Details' : 'View Details' }}
            </button>

            <!-- Expandable Content -->
            <div v-show="job.showDetails" class="mt-4">
              <p class="text-gray-400"><strong>Description:</strong> {{ job.description }}</p>
              <p class="text-gray-400 mb-4"><strong>Closing Date:</strong> {{ job.date_closing }}</p>
              <button @click="downloadPDF(job.id)" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Job Specification
              </button>

              <!-- Application Process -->
              <div class="mt-4">
                <a v-if="job.application_process.button" 
                  :href="job.application_process.url" 
                  target="_blank" 
                  class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">
                  Apply Now
                </a>
                <p v-else class="text-gray-400"><strong>Application Process:</strong> {{ job.application_process.text }}</p>
              </div>
            </div>
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
            id: 1,
            title: 'Graphic Designer',
            location: 'London, UK',
            description: 'Develop, design, and create a variety of marketing and promotional materials, including logos, brochures, posters, social media graphics and website assets.',
            date_advertised: '01/01/2025',
            date_closing: 'open till filled',
            application_process: {
              'button': true,
              'url': 'https://hrms.workpermitcloud.co.uk/career/MzYwMA==',
              'text': ''
            },
            showDetails: false // Controls expansion
          }
        ]
      };
    },
    methods: {
      toggleDescription(index) {
        this.jobOpenings[index].showDetails = !this.jobOpenings[index].showDetails;
      },
      downloadPDF(job_id) {
        try {
          // Construct the dynamic file path
          const pdfPath = `/careers/${job_id}.pdf`;
          const link = document.createElement('a');
          link.href = pdfPath;
          link.download = `${job_id}.pdf`; // Set the download filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error("File not found:", error);
        }
    }
    }
  };
  </script>
  
  <style scoped>
  /* Styling adjustments */
  button {
    transition: all 0.3s ease;
  }
  </style>
  