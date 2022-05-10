<template>
  <div class="flex flex-row-reverse m-2">
    <div class="p-2 flex border rounded-lg bg-white shadow-md">
      <label for="date" class="hidden">Select Date</label>
      <Datepicker
        id="date"
        v-model="selectedDate"
        :upper-limit="upperLimit"
        class="m-2 p-1 border-grey-600 border-2 rounded"
      />
      <select
        v-model.number="daysBack"
        class="m-2 p-1 border-grey-600 border-2 rounded"
      >
        <option value="3">3 Days Back</option>
        <option value="7">7 Days Back</option>
        <option value="30">30 Days Back</option>
      </select>
    </div>
  </div>
  <MetricTable
    v-if="$route.name === 'table'"
    :metric-data="metricData"
    :days-back="daysBack"
  />
  <MetricChart
    v-if="$route.name === 'chart'"
    :metric-data="metricData"
    :loading="loading"
  />
</template>

<script>
import Datepicker from "vue3-datepicker";
import { compareAsc, sub, add } from "date-fns";
import MetricTable from "../components/MetricTable.vue";
import MetricChart from "../components/MetricChart.vue";

const API_URL = import.meta.env.VUE_ENV_API_URL;

export default {
  components: {
    MetricTable,
    MetricChart,
    Datepicker,
  },
  data: () => ({
    metricData: [],
    selectedDate: "",
    daysBack: 7,
    upperLimit: "",
    loading: false,
  }),
  watch: {
    daysBack: "fetchData",
    selectedDate: "fetchData",
  },
  async created() {
    this.loading = true;
    const yesterday = sub(new Date(), { days: 1 });
    this.selectedDate = yesterday;
    this.upperLimit = yesterday;
    // fetch on init
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const url = new URL(API_URL);
      url.searchParams.set("enddate", add(this.selectedDate, { days: 1 }));
      url.searchParams.set(
        "startdate",
        sub(this.selectedDate, { days: this.daysBack - 1 })
      );

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
