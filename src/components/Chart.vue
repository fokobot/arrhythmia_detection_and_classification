<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  // components: { Bar },
  props: {
    title: {
      type: String,
      required: true,
    },
    signal: {
      type: Array,
      required: true,
    },
    segments: {
      type: Object,
      default: () => {
        return {}
      },
    },
    showSegments: {
      type: Boolean,
      required: true
    },
  },
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "",
      },
      tooltips: {
        mode: "index",
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
          },
        },
        y: {
          display: false,
          scaleLabel: {
            display: false,
            labelString: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
      spanGaps: true,
    },
  }),

  mounted() {
    const vm = this
    vm.chartdata.labels = Array.from(Array(vm.signal.length).keys());
    // colors: rosa = #ff6384; azul = #36a2eb; verde = #4bc0c0; purpura = #cc65fe; amarillo = #ffce56;
    if (vm.showSegments) {
      vm.segments.F.forEach((segment, index) => {
        const emptyArray = new Array(vm.signal.length).fill(NaN);
        const subSegment = vm.signal.slice(segment.start_index, segment.end_index + 1);
        let dataArray = emptyArray.splice(0, vm.signal.length - subSegment.length)
        dataArray.splice(segment.start_index, 0, ...subSegment)
        vm.chartdata.datasets.push({
          label: `F #${index}`,
          data: dataArray,
          borderColor: "#ff6384",
          backgroundColor: "rgba(0, 0, 0, 0)",
          fill: false,
          tension: 0,
        })
      });
      vm.segments.N.forEach((segment, index) => {
        const emptyArray = new Array(vm.signal.length).fill(NaN);
        const subSegment = vm.signal.slice(segment.start_index, segment.end_index + 1);
        let dataArray = emptyArray.splice(0, vm.signal.length - subSegment.length)
        dataArray.splice(segment.start_index, 0, ...subSegment)
        vm.chartdata.datasets.push({
          label: `N #${index}`,
          data: dataArray,
          borderColor: " #36a2eb",
          backgroundColor: "rgba(0, 0, 0, 0)",
          fill: false,
          tension: 0,
        })
      });
      vm.segments.S.forEach((segment, index) => {
        const emptyArray = new Array(vm.signal.length).fill(NaN);
        const subSegment = vm.signal.slice(segment.start_index, segment.end_index + 1);
        let dataArray = emptyArray.splice(0, vm.signal.length - subSegment.length)
        dataArray.splice(segment.start_index, 0, ...subSegment)
        vm.chartdata.datasets.push({
          label: `S #${index}`,
          data: dataArray,
          borderColor: "#cc65fe",
          backgroundColor: "rgba(0, 0, 0, 0)",
          fill: false,
          tension: 0,
        })
      });
      vm.segments.V.forEach((segment, index) => {
        const emptyArray = new Array(vm.signal.length).fill(NaN);
        const subSegment = vm.signal.slice(segment.start_index, segment.end_index + 1);
        let dataArray = emptyArray.splice(0, vm.signal.length - subSegment.length)
        dataArray.splice(segment.start_index, 0, ...subSegment)
        vm.chartdata.datasets.push({
          label: `V #${index}`,
          data: dataArray,
          borderColor: "#4bc0c0",
          backgroundColor: "rgba(0, 0, 0, 0)",
          fill: false,
          tension: 0,
        })
      });
    }
    vm.chartdata.datasets.push({
      label: vm.showSegments ? "Señal Preprocesada" : "Señal Original",
      data: vm.signal,
      borderColor: "#ffce56",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fill: false,
      tension: 0,
    });
    vm.options.title.text = vm.title;
    console.log(vm.chartdata, 'data', vm.options, 'options')
    vm.renderChart(vm.chartdata, vm.options);
  },
};
</script>