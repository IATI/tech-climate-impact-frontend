<template>
  <h2 class="text-3xl font-serif font-bold p-4">TCI Metrics Table</h2>
  <div class="text-gray-800">
    <div class="grid grid-cols-6 bg-gray-200 border-b-2 border-grey-500">
      <div class="invisible">Date:</div>
      <div class="invisible"></div>
      <div v-for="date in dates" :key="date" class="text-lg font-bold p-2 m-2">
        {{ formatDate(date) }}
      </div>
    </div>
    <div
      v-for="metricType in metricTypes"
      :key="metricType"
      class="grid grid-cols-6 items-center p-4 border-b-2 border-grey-500 bg-white transition duration-300 ease-in-out hover:bg-gray-100"
    >
      <div class="col-span-2 mr-4 text-lg font-bold">
        {{ metricMeta[metricType].displayName }}
        <span class="text-sm font-semibold"
          >( {{ metricMeta[metricType].unit }} )</span
        >
      </div>
      <div v-for="date in dates" :key="date" class="font-semibold p-2">
        {{ getCellValue(date, metricType) }}
      </div>
    </div>
  </div>
</template>

<script>
import { compareAsc, format } from "date-fns";
const API_URL = "https://func-tci-services.azurewebsites.net/api/metrics";
export default {
  data: () => ({
    metricData: [],
  }),
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
    dates() {
      return this.metricData.reduce((acc, val) => {
        if (!acc.has(val.endDate)) {
          acc.add(val.endDate);
        }
        return acc;
      }, new Set());
    },
  },
  created() {
    // fetch on init
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}`;
      this.metricData = (await (await fetch(url)).json()).sort(
        ({ endDate: a }, { endDate: b }) => compareAsc(new Date(a), new Date(b))
      );
    },
    formatDate(dateStr) {
      return format(new Date(dateStr), "dd/MM/yyyy");
    },
    getCellValue(date, metricType) {
      return this.metricData.reduce((acc, metric) => {
        if (metric.endDate === date && metric.type === metricType) {
          acc = `${Number(metric.value).toFixed(2)}`;
        }
        return acc;
      }, "");
    },
  },
};
</script>
