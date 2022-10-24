<template>
  <h2 class="text-3xl font-serif font-bold p-4">TCI {{ docTitle }}</h2>
  <div class="text-center overflow-x-scroll">
    <iframe
      class="w-[600px] md:w-full lg:w-[800px] h-[900px] block mx-auto my-0"
      :src="docUrl"
    ></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    docTitle() {
      let title = "";
      switch (this.$route.name) {
        case "methodology":
          title = "Methodology";
          break;
        case "outcomes":
          title = "Outcomes";
          break;
      }
      return title;
    },
    docUrl() {
      let url = "";
      switch (this.$route.name) {
        case "methodology":
          url =
            "https://docs.google.com/document/d/e/2PACX-1vTZki-4WvcGPJGB3L8y7zaGRZOadisVw-f4jJ2JQNVXh1WY27_9XrrkpC99LJEMAx05F9ETD-PW3gPB/pub?embedded=true";
          break;
        case "outcomes":
          url =
            "https://docs.google.com/document/d/e/2PACX-1vQNNXFVte9_aft1J5s-mQZphn_Yu7-coBsG4NzxwXLwMyX2x6xt22CMcglH-Bwpl0Xm8khIBZVUXnUL/pub?embedded=true";
          break;
      }
      return url;
    },
  },
};
</script>
