<template>
  <footer class="flex justify-between bg-white border-t border-grey-200">
    <a
      href="https://www.flaticon.com/free-icons/climate-change"
      title="climate change icons"
      class="text-xs self-center text-left p-2"
      >Climate change icons created by <br />
      Freepik - Flaticon</a
    >
    <div class="p-2 mr-4">
      <a
        class="flex justify-end gap-1 hover:underline"
        href="https://github.com/iati/tech-climate-impact-metrics"
        target="_blank"
        >Metrics GitHub<ExternalLinkIcon class="mb-2 h-5 w-5"
      /></a>
      <a
        class="flex gap-1 hover:underline"
        href="https://github.com/iati/tech-climate-impact-frontend"
        target="_blank"
        >Frontend GitHub<ExternalLinkIcon class="h-5 w-5"
      /></a>
    </div>
  </footer>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";

export default {
  components: { ExternalLinkIcon },
};
</script>
