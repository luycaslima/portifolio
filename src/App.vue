<template>
  <MainMenu />
  <div class="main">
    <router-view></router-view>
  </div>
  <GoUpButton/>
  <Footer />
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Footer from "@/components/Footer.vue";
import GoUpButton from "@/components/GoUpButton.vue"

export default {
  components: { MainMenu, Footer, GoUpButton },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin: auto 0px;
}
body {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background-color: #f7f7ff;
  padding-bottom: 222px;
  margin: 108px 0px 0px 0px;
  min-height: 65vh;
}

body p {
  font-family: "Roboto Condensed", cursive;
}

.page {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 20px;

  animation: fadeIn ease .5s;
  -webkit-animation: fadeIn ease .5s;
  -moz-animation: fadeIn ease .5s;
  -o-animation: fadeIn ease .5s;
  -ms-animation: fadeIn ease .5s;
}
.page p {
  text-align: justify;
}

h2 {
  font-family: "Righteous", cursive;
  color: #001021;
  margin: 20px 0 25px;
  font-size: 30px;
  letter-spacing: 3px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.title-page h1 {
  font-family: "Righteous", cursive;
  color: #2c3e50;
}

.title-page {
  margin: 10px 0;
}

footer {
  text-align: center;
  height: 140px;
  background-color: #e7e7f2;
  padding: 20px 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

/*Animation Fade in of the pages*/
@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@media only screen and (max-width: 840px) {
  .page p {
    text-align: center;
  }
}
</style>
