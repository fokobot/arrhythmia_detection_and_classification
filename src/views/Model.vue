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
          class="btn m-4 inline-block cursor-pointer rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 transition ease-out duration-300"
          :disabled="gettingSignal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#26211F"
            class="inline-block"
            v-if="gettingSignal"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
          Obtener señal
        </div>
      </div>
      <div v-if="showOriginalSignal" class="col-span-2 overflow-x-auto">
        <div class="chartWrapper">
          <chart
            title="Señal Original"
            :signal="signals.original"
            :showSegments="false"
          ></chart>
        </div>
      </div>
      <div
        v-if="showOriginalSignal"
        class="flex col-span-1 justify-center items-center"
      >
        <div
          @click="process"
          class="btn m-4 inline-block cursor-pointer rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 transition ease-out duration-300"
          :disabled="processing"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#26211F"
            class="inline-block"
            v-if="processing"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
          Procesar
        </div>
      </div>
      <div v-if="showPreprocessedSignal" class="col-span-3 overflow-x-auto">
        <div class="chartWrapper">
          <chart
            title="Señal Procesada"
            :signal="signals.preprocessed"
            :segments="prediction"
            :showSegments="true"
          ></chart>
        </div>
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
      gettingSignal: false,
      processing: false,
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
    const vm = this;
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
      const vm = this;
      vm.gettingSignal = true;
      vm.showPreprocessedSignal = false;
      axios.post('http://api.ecgmodel.com/getSignal', {
        "record": parseInt(vm.recordSelected),
        "no_segment": parseInt(vm.segmentSelected),
      })
        .then(res => {
          vm.showOriginalSignal = true;
          vm.gettingSignal = false;
          vm.signals.original = res.data.signal;
        })
        .catch(err => {
          console.log(err);
          vm.gettingSignal = false;
        });
    },
    process() {
      const vm = this;
      vm.processing = true;
      axios.post('http://api.ecgmodel.com/predict', {
        "record": parseInt(vm.recordSelected),
        "no_segment": parseInt(vm.segmentSelected),
      })
        .then(res => {
          vm.showPreprocessedSignal = true;
          vm.processing = false;
          vm.prediction = res.data.prediction;
          vm.signals.preprocessed = res.data.preprocessed_signal;
        })
        .catch(err => {
          console.log(err);
          vm.processing = false;
          });
    },
  },
};
</script>

<style>
.chartWrapper {
  overflow-x: auto;
  height: 400px;
  width: 10000px;
}
</style>