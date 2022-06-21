<template>
  <div
    class="container mx-auto mt-[125px] p-16 bg-cover rounded-[24px]"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-[48px] text-[#fff]">
        Kumpulan Kegiatan Sekolah
      </h3>
      <a href="" class="font-medium text-[20px] text-[#fff]">Lihat Semua</a>
    </div>

    <div class="mt-16 flex justify-between gap-8">
      <div class="card card-compact w-96 bg-base-100">
        <figure>
          <img
            src="~/assets/school-vibes (1).jpg"
            alt="activities"
            width="400px"
            height="320px"
          />
        </figure>
        <div class="card-body p-6 flex-row justify-between">
          <h3 class="text-[#1FA7FF] font-normal text-[24px]">
            Belajar Mengajar
          </h3>
          <a href=""
            ><img src="~/assets/arrow-right.png" alt="arrow-right" width="24px"
          /></a>
        </div>
      </div>

      <div class="card card-compact w-96 bg-base-100">
        <figure>
          <img
            src="~/assets/school-vibes (1).jpg"
            alt="activities"
            width="400px"
            height="320px"
          />
        </figure>
        <div class="card-body p-6 flex-row justify-between">
          <h3 class="text-[#1FA7FF] font-normal text-[24px]">
            Belajar Mengajar
          </h3>
          <a href=""
            ><img src="~/assets/arrow-right.png" alt="arrow-right" width="24px"
          /></a>
        </div>
      </div>

      <div class="card card-compact w-96 bg-base-100">
        <figure>
          <img
            src="~/assets/school-vibes (1).jpg"
            alt="activities"
            width="400px"
            height="320px"
          />
        </figure>
        <div class="card-body p-6 flex-row justify-between">
          <h3 class="text-[#1FA7FF] font-normal text-[24px]">
            Belajar Mengajar
          </h3>
          <a href=""
            ><img src="~/assets/arrow-right.png" alt="arrow-right" width="24px"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/bg-gradient.png'

export default {
  data() {
    return { backgroundUrl }
  },
}
</script>
