<template>
  <!-- <h2 class="text-3xl font-serif font-bold p-4">TCI Metrics</h2> -->
  <h3 v-if="daysBack > 7">
    Table View not supported for {{ daysBack }} Days Back
  </h3>
  <div v-else class="w-full overflow-x-scroll md:overflow-x-none">
    <div
      class="w-[768px] md:w-full text-gray-800 border rounded-lg bg-white shadow-md mb-4"
    >
      <div
        class="grid bg-grey-200 border-b-2 border-grey-400"
        :class="{
          'grid-cols-12': dates.size === 10,
          'grid-cols-9': dates.size === 7,
          'grid-cols-5': dates.size === 3,
        }"
      >
        <div class="col-span-2 ml-4 self-center text-2xl font-serif font-bold">
          TCI Metrics
        </div>
        <div
          v-for="date in dates"
          :key="date"
          class="text-lg font-bold p-2 m-2"
        >
          {{ formatDate(date) }}
        </div>
      </div>
      <div
        v-for="metricType in metricTypes"
        :key="metricType"
        class="grid items-center p-4 border-b-2 border-grey-400 bg-white transition duration-300 ease-in-out hover:bg-green-100"
        :class="{
          'grid-cols-12': dates.size === 10,
          'grid-cols-9': dates.size === 7,
          'grid-cols-5': dates.size === 3,
        }"
      >
        <div
          class="flex flex-col justify-self-start text-left col-span-2 mr-4 text-lg font-bold"
        >
          {{ metricMeta[metricType].displayName }}
          <span class="text-sm text-left font-semibold italic">{{
            metricMeta[metricType].unit
          }}</span>
        </div>
        <div v-for="date in dates" :key="date" class="font-semibold p-2">
          {{ getCellValue(date, metricType) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "MetricTable",
  props: {
    metricData: { type: Array, default: () => [] },
    daysBack: { type: Number, default: () => 7 },
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
    dates() {
      const allDates = this.metricData.reduce((acc, val) => {
        if (!acc.has(val.endDate)) {
          acc.add(val.endDate);
        }
        return acc;
      }, new Set());
      if (allDates.size > 10) {
        return new Set(allDates.values()[(0, 9)]);
      }
      return allDates;
    },
  },

  methods: {
    formatDate(dateStr) {
      return format(new Date(dateStr), "MMM dd");
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
