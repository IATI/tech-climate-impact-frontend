<template>
  <MetricTable v-if="$route.name === 'table'" :metric-data="metricData" />
  <MetricChart v-if="$route.name === 'chart'" :metric-data="metricData" />
</template>

<script>
import { compareAsc } from "date-fns";
import MetricTable from "../components/MetricTable.vue";
import MetricChart from "../components/MetricChart.vue";

const API_URL =
  "https://func-tci-services.azurewebsites.net/api/metrics?enddate=2022-03-14&startdate=2022-03-10";
export default {
  components: {
    MetricTable,
    MetricChart,
  },
  data: () => ({
    metricData: [],
    pathName: "",
  }),
  created() {
    this.pathName = this.$route.name;
    // fetch on init
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}`;
      this.metricData = (
        await (
          await fetch(url, {
            headers: { "x-functions-key": import.meta.env.VUE_ENV_API_KEY },
          })
        ).json()
      ).sort(({ endDate: a }, { endDate: b }) =>
        compareAsc(new Date(a), new Date(b))
      );
    },
  },
};
</script>
