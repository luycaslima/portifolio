<template>
  <!--TODO  tirar a pagina home ( remover hiper link do logo central)
   e tornar a aba projects a HOME -->
  <!-- TODO Melhorar a animação ao menu fexar -->
  <nav class="topbar">
    <div id="mobile-menu-top-bar">
      <router-link to="/">
        <img src="../assets/l22l_logo.svg" alt="l22l-logo"
      /></router-link>
      <button id="btn-mobile" v-on:click="OpenMenu()">
        <img src="../assets/MobileMenu_Button.svg" alt="mobile button" />
      </button>
    </div>

    <div id="content">
      <ul id="menu">
        <li>
          <router-link to="/projects" v-on:click="ResetMenu()" tag="li"
            >PROJECTS</router-link
          >
        </li>
        <li><router-link to="/games" v-on:click="ResetMenu()">GAMES</router-link></li>
        <li id="desktop-btn">
          <router-link to="/">
            <img src="../assets/l22l_logo.svg" alt="l22l-logo"
          /></router-link>
        </li>
        <li><router-link to="/blog" v-on:click="ResetMenu()">BLOG</router-link></li>
        <li><router-link to="/about" v-on:click="ResetMenu()">ABOUT</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  components: {},
  props: {},
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    ToggleMenu() {
      const content = document.getElementById("content");
      content.classList.toggle("active");
    },
    OpenMenu() {
      const btnMobile = document.getElementById("btn-mobile");
      btnMobile.addEventListener("click", this.ToggleMenu());
    },
    ResetMenu() {
      const content = document.getElementById("content");
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      }
    },
    onResize() {
      if (window.innerWidth >= 840) {
        const content = document.getElementById("content");
        if (content.classList.contains("active")) {
          content.classList.remove("active");
        }
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}

#desktop-btn {
  display: none;
}

#mobile-menu-top-bar {
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto 30px;
}

#mobile-menu-top-bar img {
  width: 50px;
  height: 50px;
}

#btn-mobile {
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
}

.topbar {
  box-sizing: border-box;
  z-index: 20;
  box-shadow: 0 0 2px rgb(0 0 0 / 25%);
  transition: background-color 0.3s ease-in-out;
  height: 80px;
  background-color: #f7f7ff;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

#content a:link,
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
#content {
  height: 100%;
}

#menu {
  list-style: none;
  display: block;
  align-items: center;
  height: 0px;
  gap: 3rem;
  justify-content: center;
  max-width: 900px;
  transition: 0.6s;
  visibility: hidden;
  overflow-y: hidden;
  z-index: 1000;
  top: 80px;
  right: 0px;
}

#content.active #menu {
  position: absolute;
  width: 100%;
  background: #f7f7ff;
  height: calc(100vh - 80px);
  padding-top: 25vh;
  visibility: visible;
}

#menu li {
  padding: 1.5rem 0;
  min-width: 115px;
}

#content.active a {
  font-size: 24px;
}

#content a:hover {
  color: #fe5f55;
  transition: 0.3s;
}
#content img {
  height: 50px;
  width: 50px;
}

@media only screen and (min-width: 840px) {
  #btn-mobile {
    display: none;
  }
  #desktop-btn {
    display: flex;
  }

  #mobile-menu-top-bar {
    display: none;
  }

  #menu {
    position: initial;
    display: flex;
    height: initial;
    visibility: visible;
    overflow: hidden;
  }

  #content {
    justify-content: center;
    margin: auto 30px;
    display: flex;
  }

  #content a {
    min-width: 115px;
  }
}
</style>