<template>
  <div class="charting flex">
    <div id="chartContainer" style="height: 4000px; width: 1800px; overflow-x: auto;"></div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import * as CanvasJS from '@/assets/js/canvasjs.min.js';

export default {
  extends: Line,
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
        enabled: false,
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
    },
    dps: [],
    xAxisStripLinesArray: [],
    yAxisStripLinesArray: [],
  }),
  watch: {
    // whenever question changes, this function will run
    signal: function () {
      // this.render();
    }
  },
  async mounted() {
    const vm = this;
    var chart = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: "ECG Report",
        },
        subtitles: [{
          text: "Patient Name: Patient Name",
          horizontalAlign: "left",
        },
        {
          text: "Age: X-Years",
          horizontalAlign: "left",
        },
        ],
        axisY: {
          stripLines: vm.yAxisStripLinesArray,
          gridThickness: 2,
          gridColor: "#DC74A5",
          lineColor: "#DC74A5",
          tickColor: "#DC74A5",
          labelFontColor: "#DC74A5",
        },
        axisX: {
          stripLines: vm.xAxisStripLinesArray,
          gridThickness: 2,
          gridColor: "#DC74A5",
          lineColor: "#DC74A5",
          tickColor: "#DC74A5",
          labelFontColor: "#DC74A5",
        },
        data: [
          {
            type: "spline",
            color: "black",
            dataPoints: vm.dps
          }
        ]
      });

    await vm.addDataPointsAndStripLines();
    chart.render();
  },
  methods: {
    render() {
      const vm = this
      vm.chartdata.datasets = [];
      vm.chartdata.labels = Array.from({ length: vm.signal.length }, (_, i) => i + 0);
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
      vm.renderChart(vm.chartdata, vm.options);
    },
    addDataPointsAndStripLines () {
      const vm = this;
      //dataPoints
      for (let i = 0; i < vm.signal.length; i++) {
        vm.dps.push({ y: vm.signal[i] });
      }
      //StripLines
      for (let i = 0; i < 3000; i = i + 100) {
        if (i % 1000 != 0)
          vm.yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: "#DC74A5" });
      }
      for (let i = 0; i < 18000; i = i + 20) {
        if (i % 2000 == 0)
          vm.xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: "#DC74A5" });
      }
    },
  }
};
</script>