<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <header
    class="flex flex-col gap-6 lg:flex-row justify-between items-center p-4 bg-white shadow-md"
    aria-label="Main header"
  >
    <a class="flex gap-2" href="https://iatistandard.org" target="_blank">
      <img class="h-12" src="../assets/iati-logo.svg" alt="iati logo" />
      <img
        class="h-12"
        src="../assets/global-warming.png"
        alt="global warming logo"
      />
    </a>
    <a href="/">
      <h1 class="flex justify-center text-4xl font-extrabold">
        IATI Technical Climate Impact
        <span class="ml-2 text-sm italic text-blue-700">beta</span>
      </h1>
    </a>
    <nav class="flex">
      <router-link
        :class="{ 'opacity-25 cursor-not-allowed': route.path === '/' }"
        class="border rounded-l-md bg-green-200 hover:bg-green-400 px-4 py-2 shadow-sm"
        to="/"
        >Chart</router-link
      >
      <router-link
        :class="{ 'opacity-25 cursor-not-allowed': route.path === '/table' }"
        class="border bg-green-200 hover:bg-green-400 px-4 py-2 shadow-sm"
        to="/table"
        >Table</router-link
      >
      <router-link
        :class="{
          'opacity-25 cursor-not-allowed': route.path === '/methodology',
        }"
        class="border bg-green-200 hover:bg-green-400 px-4 py-2 shadow-sm"
        to="/methodology"
        >Methodology</router-link
      >
      <router-link
        :class="{
          'opacity-25 cursor-not-allowed': route.path === '/outcomes',
        }"
        class="border rounded-r-md bg-green-200 hover:bg-green-400 px-4 py-2 shadow-sm"
        to="/outcomes"
        >Outcomes</router-link
      >
    </nav>
  </header>
</template>
