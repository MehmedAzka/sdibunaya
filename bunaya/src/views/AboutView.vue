  <script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

  <template>
    <!-- SECTION 1 -->
    <div
      class=" w-full h-screen | md:h-2/3 pt-20 | lg:pt-24 flex justify-center items-center bg-bgAbout bg-cover bg-no-repeat font-montserrat z-10">
      <div class=" w-full | 2xl:w-1/2 h-full px-5 | md:px-24">
        <div
          class="  h-auto px-10 py-10 | sm:py-16 bg-gradient-to-r from-[#39674EED] to-[#478061ed] flex flex-col | lg:flex-row relative -bottom-10 | lg:-bottom-20">
          <div class=" flex justify-center items-center px-0 | lg:px-10">
            <svg width="226" height="195" viewBox="0 0 266 195" fill="none" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="266" height="195" fill="url(#pattern0_89_44)" />
              <defs>
                <pattern id="pattern0_89_44" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_89_44" transform="matrix(0.00310559 0 0 0.00423634 0 -0.00200669)" />
                </pattern>
                <image id="image0_89_44" width="322" height="237"
                  xlink:href="data:image/png;base64,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" />
              </defs>
            </svg>
          </div>
          <div class=" w-full text-sm text-white text-center | lg:text-left pt-5 px-0 | md:px-10 | lg:pt-0 lg:px-0">
            <p class=" mb-4"><b>Yayasan Dharma Bhakti Bunaya</b> adalah Sebuah lembaga pendidikan yg sangat peduli
              dengan pembentukan
              karakter sesuai tuntunan Quran dan Sunnah. </p>
            <p class=" hidden | sm:block mb-4">Dengan izin Allah SWT, Yayasan Dharma Bhakti Bunaya telah berhasil
              melewati 19 tahun
              perjalanan
              bersejarahnya dalam bidang pendidikan. Setiap saat menjadi sejarah penting bagi Bunaya dalam berkhidmat
              bagi perubahan dan pembangkitan ummat. </p>
            <p class=" mb-4">Mencintai semua anak didik dengan segala keunikannya melalui pendidikan yang tulus dari
              hati.</p>
            <p class=" mb-4">Berkolaborasi dengan orangtua & berbagai pihak dalam upaya perbaikan dan peningkatan
              kualitas pendidikan
              serta layanan pendukungnya demi memberikan kontribusi yang lebih baik dalam menghadapi perubahan zaman</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div
      class=" w-full h-auto pt-56 pb-14 xs:pt-24 | sm:pt-20 | lg:pt-28 | xl:pt-28 | 2xl:pt-32 flex flex-col justify-center items-center font-montserrat bg-white z-10">
      <div
        class="w-full | 2xl:w-1/2 h-full flex flex-col justify-center items-center | lg:items-start font-montserrat text-[#43755A] px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0 relative">
        <div class=" w-full | lg:w-3/5 flex flex-col text-sm font-semibold z-10">
          <h1
            class=" w-7 text-xl lg:text-3xl font-semibold absolute top-0 right-5 | sm:right-24 | lg:right-28 | 2xl:right-0">
            01</h1>
          <h1 class=" lg:w-24 mb-7 text-xl sm:text-2xl xl:text-3xl capitalize font-bold xl:font-extrabold text-left">
            visi & misi
          </h1>
          <p class=" mb-3">Visi Bunayaiadalah Terwujudnya Sekolah Dasar Islam Berprestasi yang Sukses Membina
            Generasi Sholeh
            Cendikia.</p>
          <div class=" w-full">
            <p class=" mb-3">Untuk mencapai Visi tersebut Bunaya memiliki Misi :</p>
            <ul class=" list-decimal list-inside">
              <li class=" mb-2">Menyelenggarakan program Pendidikan bermutu yang memadukan potensi IMTAQ, IPTEK dan
                lingkungan
                secara proposional.</li>
              <li class=" mb-2">Mengemban program SIT secara profesional, inovatif serta partisipatif dengan
                memperdayakan secara
                optimal potensi sumber daya insani, lingkungan sosial dan alam sekitar.</li>
              <li>Menghasilkan lulusan berkualitas yang sholeh, sehat, cerdas, dan kreatif. Hingga memiliki
                kematangan yang sikap mental, kemandirian serta kemampuan dasar yang cukup untuk jenjang pendidikan
                berikutnya.</li>
            </ul>
          </div>
        </div>
        <img
          class=" hidden | lg:block lg:w-[508px] | xl:w-[598px] absolute right-5 | 2xl:-right-10 -bottom-24 rotate-2 z-0"
          src="../assets/img1.png" alt="" draggable="false">
      </div>
    </div>

    <!-- SECTION 3 -->
    <div
      class=" w-full h-auto pt-24 pb-20 | sm:pt-10 | xl:pt-16 | 2xl:pt-10 flex flex-col justify-center items-center font-montserrat relative">
      <img class=" w-3/5 opacity-15 absolute top-0 right-0 hidden sm:block grayscale"
        src="./../assets/bunaya_web_logo.png" alt="" draggable="false">
      <img class=" w-3/5 opacity-15 absolute bottom-0 left-0 hidden sm:block grayscale"
        src="./../assets/bunaya_web_logo.png" alt="" draggable="false">
      <div
        class=" w-full | 2xl:w-1/2 h-full flex flex-col justify-center items-center | lg:items-start font-montserrat text-white px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0 mb-16 | lg:mb-14 z-10">
        <div class=" w-full relative flex justify-center items-center">
          <div class=" w-full | lg:w-1/2 flex flex-col text-sm font-semibold pr-0 | lg:pr-10 | xl:pr-16">
            <h1
              class=" w-7 text-xl lg:text-3xl font-semibold absolute top-0 right-5 | sm:right-0 | lg:right-10 | xl:right-0">
              02</h1>
            <h1
              class=" w-full mb-7 text-xl | lg:text-2xl sm:text-2xl xl:text-3xl capitalize font-bold xl:font-extrabold text-left">
              sistem
              pendidikan
            </h1>
            <ul class="list-decimal list-inside">
              <li class=" mb-2">Sistem pembelajaran yang diterapkan di Sekolah Islam Terpadu Bunaya adalah menggunakan
                sistem kurikulum
                2013 dan kurikulum merdeka belajar yang dipadukan degan muatan nilai – nilai Islam dan metode membaca Al
                Quran Tilawati.</li>
              <li>Sistem pembelajaran yang diterapkan di Sekolah Islam Terpadu Bunaya adalah pendidikan yang menekankan
                kepada pembentukan karakter yang dilandasi dengan tuntunan Al-Quran.</li>
            </ul>
          </div>
          <div class=" hidden | w-1/2 sm:h-[26rem] lg:flex flex-row justify-start items-center p-16">
            <div class=" w-full h-full bg-aboutImg1 bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl"></div>
          </div>
        </div>
      </div>

      <div
        class=" w-full | 2xl:w-1/2 h-auto sm:h-full flex flex-row justify-center items-center | lg:items-start font-montserrat text-white px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0 mb-20 | sm:mb-14 | lg:mb-26 z-10">
        <div class=" hidden | w-1/2 sm:h-[28rem] lg:flex flex-row justify-start items-center relative xl:left-16">
          <div class=" w-60 h-72 bg-aboutImg2 bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl"></div>
          <div class=" w-64 h-80 bg-aboutImg3 bg-cover bg-center bg-no-repeat rounded-xl absolute left-28 shadow-2xl">
            <h1 class=" w-28 text-lg font-semibold capitalize absolute bottom-3 left-3 leading-tight">ruang komputer
            </h1>
          </div>
        </div>
        <div class=" w-full | lg:w-1/2 h-auto sm:h-[28rem]">
          <h1
            class=" w-full mb-7 text-xl | lg:text-2xl sm:text-2xl xl:text-3xl capitalize font-bold xl:font-extrabold text-left">
            sarana pendidikan
          </h1>
          <ul class="list-decimal list-inside font-semibold mb-5">
            <li class=" mb-2">Kelas dengan luas yang memadai</li>
            <li class=" mb-2">Halaman luas dengan pepohonan rindang, sejuk dan nuansa alami</li>
            <li class=" mb-2">Fasilitas pembelajaran dan permainan <i>indoor</i> serta <i>outdoor</i></li>
            <li class=" mb-2">Ruang Komputer</li>
            <li class=" mb-2">Ruang UKS</li>
            <li class=" mb-2">Perpustakaan mini untuk TKIT maupun SDIT</li>
            <li class=" mb-2">Lapangan badminton, futsal</li>
            <li class=" mb-2">Toilet bersih dengan jumlah sesuai kapasitas</li>
            <li>Dll</li>
          </ul>
          <button
            class=" w-full | lg:w-auto px-14 py-2 rounded-xl bg-gradient-to-r from-[#FFA234] via-[#FFA234] to-[#FFC644] hover:from-[#ffa434d5] hover:via-[#ffa434db] hover:to-[#ffc744df] text-sm font-semibold capitalize">selengkapnya</button>
        </div>
      </div>

      <div
        class=" w-full | 2xl:w-1/2 h-auto sm:h-full flex flex-row justify-center items-center | lg:items-start font-montserrat text-white px-5 | sm:px-24 | lg:px-16 | xl:px-28 | 2xl:px-0 mb-20 | sm:mb-16 z-10">
        <div class=" w-full flex justify-center items-center">
          <div class=" w-full | lg:w-1/2 pr-0 | lg:pr-10 | xl:pr-16">
            <h1
              class=" w-full mb-7 text-xl | lg:text-2xl sm:text-2xl xl:text-3xl capitalize font-bold xl:font-extrabold text-left">
              tenaga pengajar
            </h1>
            <p class=" font-semibold text-base mb-5">
              "Staf pengajar Sekolah Islam Terpadu Bunaya bukan hanya pendidik yang berkualitas, tapi juga penuh dengan
              semangat, kreativitas, dan cinta terhadap anak-anak. Mereka memahami bahwa setiap anak adalah individu
              yang unik, dan berkomitmen untuk memberikan perhatian serta mengembangkan bakat setiap anak sesuai dengan
              karakternya."
            </p>
            <button
              class=" w-full | lg:w-auto px-14 py-2 rounded-xl bg-gradient-to-r from-[#FFA234] via-[#FFA234] to-[#FFC644] hover:from-[#ffa434d5] hover:via-[#ffa434db] hover:to-[#ffc744df] text-sm font-semibold capitalize">selengkapnya</button>
          </div>
          <div class=" hidden | w-1/2 sm:h-[26rem] lg:flex flex-row justify-start items-center p-10">
            <div class=" w-full h-full bg-aboutImg4 bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl"></div>
          </div>
        </div>
      </div>

    </div>

  </template>