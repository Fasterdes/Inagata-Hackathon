<template>
  <div class="min-h-screen flex justify-center items-center m-0 p-0">
    <div class="mockup-window border bg-base-300 max-w-[50%]">
      <div class="flex flex-col gap-6 justify-center px-5 py-10 bg-base-200">
        <h1 class="font-bold text-2xl text-center">Choose your theme first!</h1>

        <div class="flex flex-col w-full border-opacity-50">
          <NuxtLink class="btn h-20" to="/v1/home">V1</NuxtLink>

          <div class="divider">OR</div>

          <NuxtLink class="btn h-20 bg-base-100 border-base-300" to="/v2/home"
            >V2</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
