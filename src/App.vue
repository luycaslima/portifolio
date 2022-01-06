<template>
  <MainMenu />
  <div class="main">
   <router-view ></router-view>
  </div>
  <Footer/>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: { MainMenu,Footer },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial,'Roboto Condensed',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main{
  margin: auto 0px;
}
body {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background-color:  #f7f7ff;
  padding-bottom: 220px;
  margin: 100px 0px 0px 0px;
  min-height: 100vh;
  
}
body p{
  font-family: 'Roboto Condensed', cursive;
  

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

.title-page h1{
  font-family: "Righteous", cursive;
  color:  #2c3e50;
}

.title-page {
  margin: 10px 0;
}

footer{
  text-align: center;
  height: 140px;
  background-color: #E7E7F2;
  padding: 20px 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
}
</style>
