<template>
  <div
    v-for="metricType in metricTypes"
    :key="metricType"
    class="p-2 md:p-4 mb-4 mx-1 border rounded-lg bg-white shadow-md"
  >
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
import { format } from "date-fns";
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
              grid: {
                display: false,
                drawBorder: false,
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
            .map((data) => format(new Date(data.endDate), "MMM dd")),
          datasets: [
            {
              label: type,
              data: props.metricData
                .filter((data) => data.type === type)
                .map((data) => data.value),
              borderColor: "#4ade80",
              backgroundColor: "#86efac",
              fill: false,
              tension: 0.4,
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
