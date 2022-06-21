<template>
  <div
    class="hero -mt-[108px] h-[802px]"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  ></div>
</template>

<script>
import backgroundUrl from '~/assets/bg-gradient.png'

export default {
  data() {
    return { backgroundUrl }
  },
}
</script>
