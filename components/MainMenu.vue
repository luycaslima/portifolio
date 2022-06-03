<template>
  <nav class=" m-auto max-w-screen-lg sticky bg-bg/30 backdrop-blur-sm top-0 z-50 top-bar p-4 flex-wrap ">
    <div class="flex items-center justify-between">
      <nuxt-link to="/">
        <img src="/home_btn.svg" alt="">
      </nuxt-link>
      <div class="menu-options text-xl items-center justify-center flex">
        <nuxt-link to="/" class="px-4 m-auto hover:text-secondary transition-color duration-200">
          WORKS
        </nuxt-link>
        <nuxt-link to="/" class="px-4 m-auto hover:text-secondary transition-color duration-200">
          BLOG
        </nuxt-link>
        <!-- <button class="items-center rounded w-10 h-10 bg-terciary hover:bg-darkBG transition-color duration-200">
          <img src="/svgs/moon.svg" alt="" class="m-auto">
        </button> -->
      </div>
    </div>
  </nav>
  <!-- TODO Usar um icone de lua mais fino -->
</template>

<style scoped>

.top-bar {
    height: 80px;
}
.menu-options a{
    font-family: "Righteous", cursive;
    min-width: 88px;
}
</style>
