<template>
  <LineChart
    v-for="metricType in metricTypes"
    :key="metricType"
    :chart-data="data[metricType]"
    :options="options[metricType]"
  />
</template>

<script>
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "MetricChart",
  components: { LineChart },
  props: {
    metricData: { type: Array, default: () => [] },
  },
  computed: {
    metricTypes() {
      return this.metricData.reduce((acc, val) => {
        if (!acc.includes(val.type)) {
          acc.push(val.type);
        }
        return acc;
      }, []);
    },
    metricMeta() {
      return this.metricData.reduce((acc, val) => {
        const { displayName, description, unit, unitDescription } = val;
        acc[val.type] = { displayName, description, unit, unitDescription };
        return acc;
      }, {});
    },
    options() {
      return this.metricTypes.reduce((acc, type) => {
        acc[type] = {
          parsing: {
            xAxisKey: "endDate",
            yAxisKey: "value",
          },
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: this.metricMeta[type].displayName,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              title: {
                display: true,
                text: this.metricMeta[type].unit,
              },
            },
          },
        };
        return acc;
      }, {});
    },
    data() {
      return this.metricTypes.reduce((acc, type) => {
        acc[type] = {
          datasets: [
            {
              label: type,
              data: this.metricData.filter((data) => data.type === type),
            },
          ],
        };
        return acc;
      }, {});
    },
  },
});
</script>
