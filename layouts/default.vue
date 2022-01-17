<template>
  <div class="main">
    <MainMenu />
    <Nuxt />
    <GoUpButton />
    <PageFooter />
  </div>
</template>

<script>
// https://stackoverflow.com/questions/53426648/how-to-define-route-in-nuxt-js
// Para multiplas linguas no site
export default {
  layout: 'default'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&display=swap");
* {
  font-family: "Roboto Condensed", cursive;
}

h1 {
  font-family: "Righteous", cursive;
}

h2 {
  font-family: "Righteous", cursive;
  color: #001021;
  margin: 10px 0;
  font-size: 28px;
  letter-spacing: 3px;
  text-align: center;
}

h3 {
  font-family: "Righteous", cursive;
  font-size: 20px;
  color: #495867;
  letter-spacing: 3px;
  margin: 10px 0;
  text-align: center;
}

.main {
  margin: auto 0px;
}
body {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background-color: #f7f7ff;
  padding-bottom: 200px;
  margin: 80px 0px 0px 0px;
  min-height: 70vh;
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

.title-page h1 {
  color: #2c3e50;
}

.title-page {
  margin: 10px 0;
  text-align: center;
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
/* Titulo das paginas */
.title-page {
  margin: 12px;
  align-content: center;
  justify-content: space-evenly;
}

.title-page h1 {
  font-family: "Righteous", cursive;
  color: #001021;
  font-size: 40px;
  letter-spacing: 5px;
  margin: 10px;
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

@media only screen and (min-width: 840px) {
  .page p {
    text-align: center;
  }
  .title-page img {
    width: auto;
    height: auto;
  }
  .title-page h1 {
    margin: 20px;
  }
  .title-page {
    display: flex;
    justify-content: space-between;
  }
}

</style>
