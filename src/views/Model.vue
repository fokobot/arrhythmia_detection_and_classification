<template>
  <div class="model">
    <div class="grid md:grid-cols-3">
      <div class="col-span-3">
        <select v-model="recordSelected" class="inline-block">
          <option disabled value="">Seleccione un record</option>
          <option v-for="record in records" :key="record">{{ record }}</option>
        </select>
        <select v-model="segmentSelected" class="inline-block">
          <option disabled value="">Seleccione un segmento</option>
          <option v-for="segment in segments" :key="segment">
            {{ segment }}
          </option>
        </select>
        <div
          @click="getSignal"
          class="btn m-4 inline-block rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 hover:cursor-pointer transition ease-out duration-300"
        >
          Obtener señal
        </div>
      </div>
      <div v-if="showOriginalSignal" class="col-span-2">
        <chart
          title="Señal Original"
          :signal="signals.original"
          :showSegments="false"
          labels
        ></chart>
      </div>
      <div v-if="showOriginalSignal" class="flex col-span-1 justify-center items-center">
        <div
          @click="process"
          class="btn m-4 inline-block rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 hover:cursor-pointer transition ease-out duration-300"
        >
          Procesar
        </div>
      </div>
      <div v-if="showPreprocessedSignal" class="col-span-3">
        <chart
          title="Señal Procesada"
          :signal="signals.preprocessed"
          :segments="prediction"
          :showSegments="true"
          class="w-4/4"
        ></chart>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import axios from 'axios';

export default {
  name: "Model",
  components: {
    Chart,
  },
  data: function () {
    return {
      showOriginalSignal: false,
      showPreprocessedSignal: false,
      classManager: "hidden",
      sidebarSelected:
        "px-4 flex justify-end border-r-4 cursor-pointer border-primary-100",
      sidebarNoSelected:
        "px-4 flex justify-end border-r-4 cursor-pointer border-white",
      records: [],
      recordSelected: '',
      segments: [],
      segmentSelected: '',
      prediction: {
        F: [],
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
  created() {
    const vm = this
    vm.segments = Array.from({ length: 40 }, (_, i) => i + 1);
    axios.get('http://api.ecgmodel.com/records')
      .then(res => vm.records = res.data.records)
      .catch(err => console.log(err));
  },
  methods: {
    addClass() {
      if (this.classManager === "") {
        this.classManager = "hidden";
      } else {
        this.classManager = "";
      }
    },
    getSignal() {
      const vm = this
      axios.post('http://api.ecgmodel.com/getSignal', {
        "record": parseInt(vm.recordSelected),
        "no_segment": parseInt(vm.segmentSelected),
      })
        .then(res => {
          vm.showOriginalSignal = true
          vm.signals.original = res.data.signal
          })
        .catch(err => console.log(err))
    },
    process() {
      const vm = this
      axios.post('http://api.ecgmodel.com/predict', {
        "record": parseInt(vm.recordSelected),
        "no_segment": parseInt(vm.segmentSelected),
      })
        .then(res => {
          vm.showPreprocessedSignal = true
          vm.prediction = res.data.prediction
          vm.signals.preprocessed = res.data.preprocessed_signal
          })
        .catch(err => console.log(err))
    },
  },
};
</script>