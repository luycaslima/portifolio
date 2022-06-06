<template>
  <footer class="content m-0 p-0 bg-secondaryBG">
    <div class="flex items-center justify-center p-8">
      <img id="line" src="~assets/line.svg" alt="line">
    </div>
    <div class="flex items-center justify-center">
      <client-only />
      <a href="https://www.instagram.com/luycaslima/" target="_blank" class="px-2.5"><img height="36" src="~assets/svgs/social/inst.svg" alt="instagram"></a>
      <a href="https://www.linkedin.com/in/l22l/" target="_blank" class="px-2.5"><img width="36" height="36" src="~assets/svgs/social/linkedin.svg" alt="linkedin"></a>
      <a href="https://github.com/luycaslima" target="_blank" class="px-2.5"><img width="36" height="36" src="~assets/svgs/social/github.svg" alt="github"></a>
    </div>
    <div class="text-center p-6 text-darkBG">
      <span>2022. Developed by Lucas Lima.</span>
    </div>
  </footer>
</template>

<style>
.content {
  background-image: url("~assets/background_footer_logo.svg");
  background-repeat: no-repeat;
  background-position: bottom left;
}

</style>
