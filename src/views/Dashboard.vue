<template>
  <div class="dashboard">
    <div class="grid md:grid-cols-5">
      <!-- Content wrapper -->
      <div class="md:col-span-1 md:flex md:justify-end md:h-screen">
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" class="hover:text-gray-700"
                >Arrhythmia Detection and Classification</a
              >
            </h1>
            <div
              class="px-4 cursor-pointer md:hidden"
              id="burger"
              @click="addClass"
            >
              <svg
                class="w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          <ul :class="'text-sm mt-6 md:block ' + classManager" id="menu">
            <li class="text-secondary font-bold py-1">
              <a
                @click="$router.push('/model')"
                :class="$route.name === 'Model' ? sidebarSelected : sidebarNoSelected"
              >
                <span>Model</span>
                <svg
                  class="w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="py-1" v-if="false">
              <a
                @click="$router.push('/about')"
                :class="$route.name === 'About' ? sidebarSelected : sidebarNoSelected"
              >
                <span>About</span>
                <svg
                  class="w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="py-1" v-if="false">
              <a
                @click="$router.push('/contact')"
                :class="$route.name === 'Contact' ? sidebarSelected : sidebarNoSelected"
              >
                <span>Contact</span>
                <svg
                  class="w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- End Nav -->
      <main class="px-16 py-6 bg-gray-100 md:col-span-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      classManager: 'hidden',
      sidebarSelected: 'px-4 flex justify-end border-r-4 cursor-pointer border-primary-100',
      sidebarNoSelected: 'px-4 flex justify-end border-r-4 cursor-pointer border-white',
    }
  },
  methods: {
    addClass() {
      if (this.classManager === '') {
        this.classManager = 'hidden';
      } else {
        this.classManager = '';
      }
    }
  },
}
</script>
