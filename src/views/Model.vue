<template>
  <div class="model">
    <div class="grid md:grid-cols-3">
      <div class="col-span-2">
        <Chart title="Señal Original" :signal="signals.original" :showSegments="false" labels class="w-3/4"></Chart>
      </div>
      <div class="flex col-span-1 justify-center items-center">
        <div
          @click="process"
          class="btn m-4 inline-block rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 transition ease-out duration-300"
        >
          Procesar
        </div>
      </div>
      <div class="col-span-3">
        <Chart title="Señal Procesada" :signal="signals.preprocessed" :segments="prediction" :showSegments="true" class="w-4/4"></Chart>
      </div>
    </div>
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
            end_index: 15,
            peak_index: 14,
            start_index: 13,
          },
        ],
        N: [
          {
            end_index: 12,
            peak_index: 10,
            start_index: 9,
          },
        ],
        S: [
          {
            end_index: 7,
            peak_index: 5,
            start_index: 4,
          },
        ],
        V: [
          {
            end_index: 3,
            peak_index: 2,
            start_index: 1,
          },
        ],
      },
      signals: {
        original: ["4", "5", "9", "12", "14", "25", "16", "7", "18", "19", "10", "13", "2", "18", "15", "20"],
        preprocessed: ["4", "5", "9", "12", "14", "25", "16", "7", "18", "19", "10", "13", "2", "18", "15", "20"],
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
    process() {

    },
  },
};
</script>