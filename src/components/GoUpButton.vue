<template>
  <button id="go-up-button" v-on:click="GoUp()">
    <img src="../assets/GoUp_button.svg" alt="go up image" />
  </button>
</template>


<script>
export default {
  name: "GoUpButton",
  methods: {
    GoUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    ToggleGoUp() {
      const goUpButton = document.getElementById("go-up-button");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        goUpButton.style.display = "block";
      } else {
        goUpButton.style.display = "none";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.ToggleGoUp);
  },
  unmounted() {
    window.removeEventListener("scroll", this.ToggleGoUp);
  },
};
</script>

<style scoped>
#go-up-button {
  display: none;
  position: fixed;
  right: 3rem;
  bottom: 4rem;
  z-index: 10;
  
  border: none;
  outline: none;
  cursor: pointer;

  width: 2rem;
  height: 2rem;

  padding: 4px;
  background: none;
  justify-content: center;
  align-items: center;
}
</style>