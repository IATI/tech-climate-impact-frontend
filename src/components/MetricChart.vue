<template>
  <div v-for="metricType in metricTypes" :key="metricType">
    <LineChart
      ref="lineRef"
      :chart-data="data[metricType]"
      :options="options[metricType]"
    />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "MetricChart",
  components: { LineChart },
  props: {
    metricData: { type: Array, default: () => [] },
    loading: { type: Boolean, default: true },
  },
  setup(props) {
    const metricTypes = computed(() =>
      props.metricData.reduce((acc, val) => {
        if (!acc.includes(val.type)) {
          acc.push(val.type);
        }
        return acc;
      }, [])
    );

    const metricMeta = computed(() =>
      props.metricData.reduce((acc, val) => {
        const { displayName, description, unit, unitDescription } = val;
        acc[val.type] = { displayName, description, unit, unitDescription };
        return acc;
      }, {})
    );

    const options = computed(() =>
      metricTypes.value.reduce((acc, type) => {
        acc[type] = {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: metricMeta.value[type].displayName,
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
                text: metricMeta.value[type].unit,
              },
            },
          },
        };
        return acc;
      }, {})
    );

    const data = computed(() => {
      return metricTypes.value.reduce((acc, type) => {
        acc[type] = {
          labels: props.metricData
            .filter((data) => data.type === type)
            .map((data) => data.endDate),
          datasets: [
            {
              label: type,
              data: props.metricData
                .filter((data) => data.type === type)
                .map((data) => data.value),
            },
          ],
        };
        return acc;
      }, {});
    });

    return { data, metricTypes, options };
  },
});
</script>
