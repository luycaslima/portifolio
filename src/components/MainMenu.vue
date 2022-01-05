<template>
  <div class="topbar">
    <div class="content">
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/games">GAMES</router-link>
      <router-link to="/">
        <img src="../assets/l22l_logo.svg" alt="l22l-logo"
      /></router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/about">ABOUT</router-link>
      <div class="mobile-menu">
        <button v-on:click="OpenMenu()">
          <img src="../assets/MobileMenu_Button.svg" alt="mobile button"
        /></button>

        <MobileMenu />
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

export default {
  name: "MainMenu",
  components: {
    MobileMenu,
  },
  props: {},
  methods:{
    OpenMenu(){

    }
  }
};
</script>

<style scoped>
.mobile-menu {
  display: none;
}

.mobile-menu button {
  border:none;
  background: none;
}

.mobile-menu button:hover{
  cursor:pointer;
}
.mobile-menu img{
  width: 50px;
  height: 50px;
}
.topbar {
  z-index: 20;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  transition: background-color 0.3s ease-in-out;
  align-content: center;
  height: 80px;
  background-color: #f7f7ff;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

.content {
  padding: 11px 20%;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}

.content a {
  min-width: 110px;
}

.content a:link,
a:visited {
  font-family: "Righteous", cursive;
  text-decoration: none;
  color: #001021;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 85%;
  letter-spacing: 0.1em;
  transition: 0.3s;
}

.content a:hover {
  color: #fe5f55;
  transition: 0.3s;
}

.content img {
  height: 50px;
  width: 50px;
}
</style>