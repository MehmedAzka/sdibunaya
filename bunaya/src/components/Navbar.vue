<script setup>
import { ref, onMounted } from 'vue';

const navbar = ref(null);
const isScrolled = ref(false);
const isMobile = ref(window.innerWidth <= 1024);
const showSection2 = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

function handleScroll() {
  const navbarHeight = navbar.value.offsetHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / navbarHeight) * 100;

  // Ubah isScrolled menjadi true ketika halaman di-scroll sebanyak 20%
  isScrolled.value = scrollPercentage >= 10;
}

function handleResize() {
  isMobile.value = window.innerWidth <= 1023;
}

function toggleSection2() {
  if (!isMobile.value) return; // Jika bukan mode mobile, tidak lakukan apa-apa

  showSection2.value = !showSection2.value;
}
</script>

<template>
  <div ref="navbar" :class="{ 'py-5 lg:py-7': !isScrolled, 'py-5 lg:py-5': isScrolled }"
    class="w-full h-auto px-5 sm:px-10 2xl:px-20 bg-white flex flex-col lg:flex-row justify-between items-center font-montserrat shadow-lg z-30 fixed"
    style="transition: padding 0.15s ease-in;">
    <!-- SECTION 1 -->
    <div class="w-full lg:w-auto lg:mb-0 flex flex-row justify-between items-center">
      <!-- LOGO -->
      <div class="w-36">
        <RouterLink to="/">
          <img src="./../assets/logo_bunaya.png" alt="" />
        </RouterLink>
      </div>

      <!-- HAMBURGER -->
      <button @click="toggleSection2"
        class="w-10 h-10 p-1 border-2 border-black rounded-lg flex flex-col justify-around items-center bg-white hover:bg-slate-200 duration-100 lg:hidden">
        <div class="w-4/5 border border-black"></div>
        <div class="w-4/5 border border-black"></div>
        <div class="w-4/5 border border-black"></div>
      </button>
    </div>

    <!-- SECTION 2 -->
    <div v-if="showSection2 || !isMobile" class="w-full flex flex-col justify-between lg:flex-row">
      <!-- LINKS -->
      <div class="w-full capitalize flex flex-col lg:flex-row lg:justify-center font-light text-base pt-5 lg:pt-0">
        <div class=" w-full lg:w-auto my-1 lg:mx-2 hover:border-b border-black">
          <RouterLink class=" w-full" to="/">home</RouterLink>
        </div>
        <div class="w-full lg:w-auto my-1 lg:mx-2 hover:border-b border-black">
          <RouterLink class=" w-full" to="/about">about</RouterLink>
        </div>
        <div class="w-full lg:w-auto my-1 lg:mx-2 hover:border-b border-black">
          <RouterLink class=" w-full" to="/programs">programs</RouterLink>
        </div>
        <div class="w-full lg:w-auto my-1 lg:mx-2 hover:border-b border-black">
          <RouterLink class=" w-full" to="/contact">contact</RouterLink>
        </div>
      </div>

      <!-- REGIST -->
      <div class="w-full lg:w-auto flex justify-center items-center my-1 lg:mx-1">
        <p class="font-medium text-base uppercase mr-2">ppdb</p>
        <button
          class="w-full lg:w-auto border-2 border-[#43755A] px-4 py-[0.10rem] rounded-full hover:bg-[#43755A] hover:text-white duration-100 capitalize">whatsapp</button>
      </div>
    </div>
  </div>
</template>
