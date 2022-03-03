<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <header
    class="flex justify-between items-center p-4 border-b-2"
    aria-label="Main header"
  >
    <a href="/">
      <img
        class="h-12 mx-auto"
        src="http://placekitten.com/48/48"
        alt="tci logo"
      />
    </a>
    <a href="/">
      <h1 class="flex justify-center text-4xl font-extrabold">
        IATI Technical Climate Impact Dashboard
      </h1>
    </a>
    <nav class="flex">
      <router-link
        :class="{ 'opacity-25 cursor-not-allowed': route.path === '/' }"
        class="border rounded-md bg-red-200 hover:bg-red-400 px-4 py-2 mx-4"
        to="/"
        >Chart</router-link
      >
      <router-link
        :class="{ 'opacity-25 cursor-not-allowed': route.path === '/table' }"
        class="border rounded-md bg-red-200 hover:bg-red-400 px-4 py-2 mx-4"
        to="/table"
        >Table</router-link
      >
      <router-link
        :class="{
          'opacity-25 cursor-not-allowed': route.path === '/methodology',
        }"
        class="border rounded-md bg-red-200 hover:bg-red-400 px-4 py-2 mx-4"
        to="/methodology"
        >Methodology</router-link
      >
    </nav>
  </header>
</template>
