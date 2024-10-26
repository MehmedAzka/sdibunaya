<script setup>
import { ref, reactive, onMounted, nextTick, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const navbar = ref(null);
const isScrolled = ref(false);
const isMobile = ref(window.innerWidth <= 1024);
const showSection2 = ref(false);

const route = useRoute();

const state = reactive({
  navLinks: [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROGRAM", path: "/program" },
    { name: "CONTACT", path: "/contact" },
  ],
  currentRoute: route.path, // Mengatur currentRoute berdasarkan rute saat ini
  boxPosition: 0,
  boxWidth: 0,
});

const highlightStyle = computed(() => ({
  width: `${state.boxWidth}px`,
  left: `${state.boxPosition}px`,
  backgroundColor: '#43755A', // Warna garis highlight
  transition: 'all 0.3s ease', // Animasi untuk perpindahan garis
}));

function handleScroll() {
  const navbarHeight = navbar.value.offsetHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / navbarHeight) * 100;
  isScrolled.value = scrollPercentage >= 10;
}

function handleResize() {
  isMobile.value = window.innerWidth <= 1439;
  setCurrentRoute(state.currentRoute); // Perbarui garis saat ukuran layar berubah
}

function toggleSection2() {
  if (!isMobile.value) return;
  showSection2.value = !showSection2.value;
}

function setCurrentRoute(path) {
  state.currentRoute = path;
  nextTick(() => {
    const activeLink = navbar.value.querySelector(".nav-item.text-green-700");
    if (activeLink) {
      state.boxPosition = activeLink.offsetLeft;
      state.boxWidth = activeLink.offsetWidth;
    }
  });
}

onMounted(() => {
  setCurrentRoute(route.path); // Mengatur garis highlight sesuai dengan rute saat ini
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

// Watch untuk mendeteksi perubahan rute
watch(
  () => route.path,
  (newPath) => {
    setCurrentRoute(newPath);
  }
);
</script>

<template>
  <div ref="navbar" :class="{ 'py-5 xl:py-7': !isScrolled, 'py-5 xl:py-5': isScrolled }"
    class="w-full h-auto px-5 sm:px-10 2xl:px-20 bg-white flex flex-col xl:flex-row justify-between items-center font-montserrat shadow-lg z-30 fixed"
    style="transition: padding 0.15s ease-in;">

    <!-- SECTION 1 -->
    <div class="w-full xl:w-auto xl:mb-0 flex flex-row justify-between items-center">
      <!-- LOGO -->
      <div class="w-36">
        <RouterLink to="/">
          <img src="./../assets/logo_bunaya.png" alt="" />
        </RouterLink>
      </div>

      <!-- HAMBURGER -->
      <button @click="toggleSection2"
        class="w-10 h-10 p-1 border-2 border-black rounded-lg flex flex-col justify-around items-center bg-white hover:bg-slate-200 duration-100 xl:hidden">
        <div class="w-4/5 border border-black"></div>
        <div class="w-4/5 border border-black"></div>
        <div class="w-4/5 border border-black"></div>
      </button>
    </div>

    <!-- SECTION 2 -->
    <div v-if="showSection2 || !isMobile" class="w-full flex flex-col justify-between xl:flex-row relative">
      <!-- LINKS -->
      <div
        class="w-full capitalize flex flex-col xl:flex-row xl:justify-center item-center font-light text-base pt-5 xl:pt-0 relative">
        <RouterLink v-for="link in state.navLinks" :key="link.path" :to="link.path"
          @click="() => { toggleSection2(); setCurrentRoute(link.path); }"
          :class="{ 'text-green-700': state.currentRoute === link.path }"
          class="nav-item w-full xl:w-auto mx-0 | xl:mx-2 my-1 | xl:my-0 flex justify-start | xl:justify-center items-center">
          {{ link.name }}
        </RouterLink>
      </div>

      <!-- REGIST -->
      <div class="w-full xl:w-auto flex justify-center items-center my-1 xl:mx-1">
        <p class="font-medium text-base uppercase mr-2">ppdb</p>
        <button
          class="w-full xl:w-auto border-2 border-[#43755A] px-4 py-[0.10rem] rounded-full hover:bg-[#43755A] hover:text-white duration-100 capitalize">whatsapp</button>
      </div>

      <!-- HIGHLIGHT BOX -->
      <div class="absolute bottom-0 h-1 transition-all duration-300 ease-in-out" :style="highlightStyle"></div>
    </div>
  </div>
</template>
