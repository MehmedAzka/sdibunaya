  <script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

  <template>
    <!-- SECTION 1 -->
    <div class=" w-full h-auto pt-20 | lg:pt-24 flex justify-center items-center bg-white font-montserrat">
      <div
        class=" w-full | px-10 pt-10 pb-14 | md:pl-20 md:pr-12 | lg:pl-24 lg:pr-10 lg:py-20 | xl:pl-28 xl:pr-16 xl:py-32 | 2xl:flex justify-center">
        <div class=" 2xl:w-3/5 flex flex-row justify-center | md:justify-start items-center relative">
          <div class=" w-auto z-10">
            <h1
              class=" text-center font-bold text-3xl | sm:text-4xl | md:text-left lg:font-extrabold lg:text-5xl | xl:text-6xl text-[#43755a] mb-3 lg:mb-5">
              Solusi
              Cerdas<br>
              Untuk
              Mencetak<br>
              Generasi Soleh<br>
              Cendikia
            </h1>
            <div class=" flex justify-center md:justify-start">
              <button
                class=" py-2 px-8 | lg:px-16 | xl:py-3 xl:px-20 bg-gradient-to-r from-[#FFA234] via-[#FFA234] to-[#FFC644] from-20% to-100% text-white font-medium text-xs | lg:font-bold | lg:text-sm | rounded-lg | lg:rounded-xl | xl:rounded-2xl hover:scale-105 duration-300">
                <RouterLink to="/about">Selengkapnya</RouterLink>
              </button>
            </div>
          </div>
          <div
            class=" w-full h-20 p-4 | md:w-56 md:h-28 md:p-6 | lg:w-80 lg:h-32 lg:p-[1.90rem] | xl:w-96 xl:h-40 xl:p-10 bg-white shadow-[0_-5px_20px_5px_rgba(0,0,0,0.3)] rounded-xl absolute sm:left-5 -bottom-28 | md:-bottom-36 | lg:-bottom-40 | xl:-bottom-52 z-20">
            <svg class=" absolute top-3 right-3" width="15" height="15" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 8.97937C9 8.42708 9.44771 7.97937 10 7.97937C10.5523 7.97937 11 8.42708 11 8.97937V14.9794C11 15.5317 10.5523 15.9794 10 15.9794C9.44771 15.9794 9 15.5317 9 14.9794V8.97937Z"
                fill="black" />
              <path
                d="M10 4.05115C9.44771 4.05115 9 4.49886 9 5.05115C9 5.60343 9.44771 6.05115 10 6.05115C10.5523 6.05115 11 5.60343 11 5.05115C11 4.49886 10.5523 4.05115 10 4.05115Z"
                fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10Z"
                fill="black" />
            </svg>
            <p
              class=" text-sm | lg:text-[1.3rem] | xl:text-[1.6rem] text-left font-semibold leading-5 lg:leading-6 xl:leading-7 text-[#43755a]">
              Pendaftaran Peserta
              Didik
              Baru
              Tahun Ajaran
              2023-2024</p>
          </div>
          <img
            class=" hidden | md:block md:w-[428px] | lg:w-[528px] | xl:w-[828px] absolute -right-10 | md:-bottom-24 | lg:-right-5 lg:-bottom-32 | xl:-bottom-48 rotate-2 z-0"
            src="../assets/img1.png" alt="" draggable="false">
        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div
      class=" w-full h-auto py-28 | xl:py-20 | 2xl:py-10 flex flex-col justify-center items-center font-montserrat relative">
      <img class=" w-3/5 opacity-15 absolute top-0 right-0 hidden sm:block grayscale"
        src="./../assets/bunaya_web_logo.png" alt="" draggable="false">
      <img class=" w-3/5 opacity-15 absolute bottom-0 left-0 hidden sm:block grayscale"
        src="./../assets/bunaya_web_logo.png" alt="" draggable="false">
      <div
        class=" w-full | 2xl:w-1/2 h-full px-3 mb-20 | sm:px-0 xl:pt-10 | 2xl:pt-20 flex flex-col justify-center items-center z-10 ">
        <h1 class=" text-2xl lg:text-3xl font-medium text-white mb-8">Galeri Bunaya</h1>
        <div
          class=" w-full md:px-24 | xl:px-40 | 2xl:px-0 grid grid-rows-8 grid-cols-1 sm:grid-rows-6 sm:grid-cols-6 lg:grid-cols-7 grid-flow-col gap-4">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/1.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/2.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/3.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-4 sm:col-span-2 lg:row-span-3 lg:col-span-3" src="./../assets/home_image/4.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-3 lg:col-span-3" src="./../assets/home_image/5.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/6.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/7.jpeg"
            alt="" draggable="false">
          <img class=" sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2" src="./../assets/home_image/8.jpeg"
            alt="" draggable="false">
        </div>
      </div>

      <div
        class=" w-full | 2xl:w-1/2 h-full flex flex-col justify-center items-center font-montserrat text-white mb-20">
        <div class=" w-full flex justify-center mb-20">
          <h1 class=" text-2xl | sm:text-3xl font-bold capitalize">keunggulan bunaya</h1>
        </div>
        <div
          class=" grid grid-cols-1 | lg:grid-cols-2 | xl:grid-cols-3 gap-6 | sm:gap-10 px-5 | sm:px-24 | lg:px-40 | 2xl:px-0">
          <div class=" w-full">
            <h1 class=" font-bold text-4xl">01.</h1>
            <p class=" w-full | lg:w-5/6 text-lg text-justify | lg:text-left">Mengintegrasikan kurikulum merdeka (SDIT)
              dan kurikulum
              sekolah Islam
              dengan
              tuntunan
              Al-Quran sebagai
              dasarnya.</p>
          </div>
          <div>
            <h1 class=" font-bold text-4xl">02.</h1>
            <p class=" w-full | lg:w-5/6 text-lg text-justify | lg:text-left">Mengedepankan pendidikan akhlaq dengan
              keteladanan.</p>
          </div>
          <div>
            <h1 class=" font-bold text-4xl">03.</h1>
            <p class=" w-full | lg:w-5/6 text-lg text-justify | lg:text-left">Membiasakan anak untuk menghafal Al-Quran
              dan
              melaksanakan
              ibadah wajib
              maupun
              sunnah.</p>
          </div>
          <div>
            <h1 class=" font-bold text-4xl">04.</h1>
            <p class=" w-full | lg:w-5/6 text-lg text-justify | lg:text-left">Mendidik anak untuk menjadi pembelajar
              yang
              memiliki
              karakter islam,
              mandiri,
              kreatif, dan
              mempunyai
              kemampuan dasar untuk jenjang pendidikan selanjutnya</p>
          </div>
          <div>
            <h1 class=" font-bold text-4xl">05.</h1>
            <p class=" w-full | lg:w-5/6 text-lg text-justify | lg:text-left">Berada di lokasi yang strategis dengan
              area
              luas, bersih
              &
              asri sehingga
              anak
              dapat
              bereksplorasi lebih
              optimal.</p>
          </div>
        </div>
      </div>

      <div
        class="w-full | 2xl:w-1/2 h-full flex flex-col justify-center items-center font-montserrat text-white px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0">
        <div
          class="w-full h-[28rem] bg-[#ffffff40] rounded-3xl flex flex-col justify-center items-center relative overflow-hidden">
          <h1 class=" text-sm | sm:text-xl font-bold capitalize absolute top-10">testimoni wali murid bunaya</h1>
          <div class="w-full h-[70%] absolute bottom-10 px-10 flex overflow-x-auto snap-x scroll-smooth no-scrollbar">

            <!-- start from here -->
            <div class=" w-64 | sm:w-80 h-full p-3 relative bg-[#ffffff58] rounded-lg mx-3 flex-shrink-0 snap-center">
              <div class="w-full h-12 mb-3 flex flex-row justify-start items-center">
                <img class="w-10 h-10 rounded-full mr-2" src="./../assets/photo_profile/person.jpg" alt="">
                <p class="text-base font-bold">Name Person</p>
              </div>
              <div class="w-full">
                <p class="text-sm break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro
                  asperiores a! Ex quod, est mollitia quis illo nulla cupiditate neque eveniet itaque, velit, ullam
                  reiciendis quae at saepe molestiae!
                </p>
              </div>
              <p class="text-xs absolute bottom-3 right-5">- January 01 2024</p>
            </div>

            <div class=" w-64 | sm:w-80 h-full p-3 relative bg-[#ffffff58] rounded-lg mx-3 flex-shrink-0 snap-center">
              <div class="w-full h-12 mb-3 flex flex-row justify-start items-center">
                <img class="w-10 h-10 rounded-full mr-2" src="./../assets/photo_profile/person.jpg" alt="">
                <p class="text-base font-bold">Name Person</p>
              </div>
              <div class="w-full">
                <p class="text-sm break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro
                  asperiores a! Ex quod, est mollitia quis illo nulla cupiditate neque eveniet itaque, velit, ullam
                  reiciendis quae at saepe molestiae!
                </p>
              </div>
              <p class="text-xs absolute bottom-3 right-5">- January 01 2024</p>
            </div>

            <div class=" w-64 | sm:w-80 h-full p-3 relative bg-[#ffffff58] rounded-lg mx-3 flex-shrink-0 snap-center">
              <div class="w-full h-12 mb-3 flex flex-row justify-start items-center">
                <img class="w-10 h-10 rounded-full mr-2" src="./../assets/photo_profile/person.jpg" alt="">
                <p class="text-base font-bold">Name Person</p>
              </div>
              <div class="w-full">
                <p class="text-sm break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro
                  asperiores a! Ex quod, est mollitia quis illo nulla cupiditate neque eveniet itaque, velit, ullam
                  reiciendis quae at saepe molestiae!
                </p>
              </div>
              <p class="text-xs absolute bottom-3 right-5">- January 01 2024</p>
            </div>

            <div class=" w-64 | sm:w-80 h-full p-3 relative bg-[#ffffff58] rounded-lg mx-3 flex-shrink-0 snap-center">
              <div class="w-full h-12 mb-3 flex flex-row justify-start items-center">
                <img class="w-10 h-10 rounded-full mr-2" src="./../assets/photo_profile/person.jpg" alt="">
                <p class="text-base font-bold">Name Person</p>
              </div>
              <div class="w-full">
                <p class="text-sm break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro
                  asperiores a! Ex quod, est mollitia quis illo nulla cupiditate neque eveniet itaque, velit, ullam
                  reiciendis quae at saepe molestiae!
                </p>
              </div>
              <p class="text-xs absolute bottom-3 right-5">- January 01 2024</p>
            </div>

            <!-- to here -->
          </div>
        </div>
      </div>
    </div>

  </template>