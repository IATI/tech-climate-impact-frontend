<script setup>
import { defineProps, ref } from "vue";

defineProps({
  msg: { type: String, default: "" },
});

const count = ref(0);

const vueEnv = ref(import.meta.env.VUE_ENV_ENVIRONMENT);
</script>

<template>
  <h1 class="text-3xl">{{ msg }}</h1>

  <h3 class="text-xl mt-4">Environment (VUE_ENV_ENVIRONMENT): {{ vueEnv }}</h3>

  <p class="mt-4">
    Recommended IDE setup:
    <a
      class="text-emerald-400"
      href="https://code.visualstudio.com/"
      target="_blank"
      >VSCode</a
    >
    +
    <a
      class="text-emerald-400"
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
      >Volar</a
    >
  </p>

  <p class="mt-4">
    <a
      class="text-emerald-400"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a class="text-emerald-400" href="https://v3.vuejs.org/" target="_blank"
      >Vue 3 Documentation</a
    >
  </p>

  <button class="mt-4 border-gray-900" type="button" @click="count++">
    count is: {{ count }}
  </button>
  <p class="mt-4">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
