<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <nav>
    <Navbar />
  </nav>

  <RouterView />
  <Footer />
</template>
