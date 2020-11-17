<template>
  <div class="model">
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  name: "Model",
  components: {
    Chart,
  },
  data: function () {
    return {
      classManager: "hidden",
      sidebarSelected:
        "px-4 flex justify-end border-r-4 cursor-pointer border-primary-100",
      sidebarNoSelected:
        "px-4 flex justify-end border-r-4 cursor-pointer border-white",
      prediction: {
        F: [
          {
            end_index: 2553.0,
            peak_index: 2403,
            start_index: 2253.0,
          },
          {
            end_index: 3437.0,
            peak_index: 3287,
            start_index: 3137.0,
          },
        ],
        N: [],
        S: [],
        V: [],
      },
      signals: {
        original: [],
        preprocessed: [],
      },
    };
  },
  methods: {
    addClass() {
      if (this.classManager === "") {
        this.classManager = "hidden";
      } else {
        this.classManager = "";
      }
    },
  },
};
</script>