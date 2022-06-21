<template>
  <div
    class="hero -mt-[108px]"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="hero-content p-0 flex-col-reverse lg:flex-row-reverse gap-[140px] mt-[190px]"
    >
      <img src="~/assets/hero-peoples (5).png" class="w-[500px]" />

      <div class="-mt-20">
        <h1 class="text-[56px] font-bold">Tentang Kami</h1>
        <p
          class="pt-4 pb-8 w-[600px] font-normal text-justify text-xl leading-[30px] text-[#787878]"
        >
          Penjelasan Tentang Seokolah Kami Yang Dapat Menambah Referesi Anda
        </p>
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
