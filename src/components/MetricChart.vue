<template>
  <!-- <div v-for="metricType in metricTypes" :key="metricType"> -->
  <LineChart
    ref="lineRef"
    :chart-data="data['cost']"
    :options="options['cost']"
  />
  <!-- </div> -->
</template>

<script>
import { computed, defineComponent, onMounted, onUpdated, ref } from "vue";
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
          datasets: [
            {
              label: type,
              data: props.metricData.filter((data) => data.type === type),
            },
          ],
        };
        return acc;
      }, {});
    });

    const lineRef = ref();
    onMounted(() => {
      console.log(`onMounted:`);
      console.log(lineRef.value);
      lineRef.value.update();
    });

    onUpdated(() => {
      console.log(`onUpdated:`);
      console.log(lineRef.value);
      lineRef.value.update();
    });

    return { data, metricTypes, options, lineRef };
  },
});
</script>
