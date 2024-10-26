  <script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

  <template>
    <!-- SECTION 1 -->
    <div
      class=" w-full h-[655px] pt-20 | lg:pt-24 flex justify-center items-center bg-bgProgram bg-cover bg-no-repeat bg-bottom font-montserrat z-10">
      <h1 class=" w-[70%] | 2xl:w-[40%] capitalize font-[800] text-[60px] text-center text-white">Solusi Untuk Mencetak
        Generasi Sholeh Cendikia</h1>
    </div>

    <div class=" w-full h-auto flex flex-col justify-center items-center font-montserrat">
      <div
        class=" w-full | 2xl:w-1/2 h-auto pt-24 pb-20 | sm:pt-10 | xl:pt-16 | 2xl:pt-10 flex flex-col justify-center items-center font-montserrat px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0 relative">
        <!-- <img class=" w-3/5 opacity-15 absolute top-0 right-0 hidden sm:block grayscale"
          src="./../assets/bunaya_web_logo.png" alt="" draggable="false">
        <img class=" w-3/5 opacity-15 absolute bottom-0 left-0 hidden sm:block grayscale"
          src="./../assets/bunaya_web_logo.png" alt="" draggable="false"> -->
        <div class=" w-full h-[244.71px] flex flex-row justify-between items-center">
          <div class=" flex flex-col justify-start text-white">
            <h1 class=" font-[780] text-[40px] leading-tight mb-3">Jenjang<br>Pendidikan</h1>
            <p class=" font-[500] text-[17px] leading-tight">Kami memfokuskan Jenjang<br>Pendidikan kami untuk usia 4
              hingga<br>usia 12 tahun yang terdiri dari TKIT & SDIT.
            </p>
          </div>

          <div class=" h-full">
            <div class=" w-[286.57px] h-full flex flex-col justify-end relative">
              <RouterLink class=" absolute top-0 left-[7.5rem]" to="#"><img class=" w-[45.57px]"
                  src="./../assets/icon/Vector.svg" alt="">
              </RouterLink>
              <div class=" w-full h-[90%] flex flex-col justify-end items-center bg-white rounded-t-[30px]">
                <div>
                  <h1>TK ISLAM BUNAYA</h1>
                  <p>Anak usia 4-6 tahun</p>
                </div>
                <div>
                  <img src="" alt="">
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </template>