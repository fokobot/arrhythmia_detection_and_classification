<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  // components: { Bar },
  data: () => ({
    chartdata: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [{
        label: 'Cubic interpolation (monotone)',
        data: [0, 20, 20, 60, 60, 120, 130, 180, 120, 125, 105, 110, 170],
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fill: false,
        cubicInterpolationMode: 'monotone'
      }, {
        label: 'Cubic interpolation (default)',
        data: [0, 20, 20, 60, 60, 120, 130, 180, 120, 125, 105, 110, 170],
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fill: false,
      }, {
        label: 'Linear interpolation',
        data: [0, 20, 20, 60, 60, 120, 130, 180, 120, 125, 105, 110, 170],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fill: false,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
      tooltips: {
        mode: 'index'
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true
          }
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    }
  }),

  async mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>