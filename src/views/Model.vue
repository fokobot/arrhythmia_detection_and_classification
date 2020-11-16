<template>
  <div class="model">
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
  name: 'Model',
  components: {
    Chart
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