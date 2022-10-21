<template>
  <h2 class="text-3xl font-serif font-bold p-4">TCI Methodology</h2>
  <div class="text-center overflow-x-scroll">
    <iframe
      class="w-[600px] md:w-full lg:w-[800px] h-[900px] block mx-auto my-0"
      src="docUrl($route.name)"
    ></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    docUrl(routeName) {
      let url = "";
      switch (routeName) {
        case "methodology":
          url =
            "https://docs.google.com/document/d/e/2PACX-1vTZki-4WvcGPJGB3L8y7zaGRZOadisVw-f4jJ2JQNVXh1WY27_9XrrkpC99LJEMAx05F9ETD-PW3gPB/pub?embedded=true";
          break;
        case "outcomes":
          url =
            "https://docs.google.com/document/d/e/2PACX-1vTZki-4WvcGPJGB3L8y7zaGRZOadisVw-f4jJ2JQNVXh1WY27_9XrrkpC99LJEMAx05F9ETD-PW3gPB/pub?embedded=true";
          break;
      }
      return url;
    },
  },
};
</script>
