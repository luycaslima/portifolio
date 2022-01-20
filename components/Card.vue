<template>
  <div class="card" @click="CallFlipCard()">
    <!-- TODO descobrir como  passar o path da imagem corretamente , Não colocar todo no root desse template que crasha querySelector-->
    <!-- tornar as cartas ajustaveis ao espaço da tela -->
    <div class="card-inner">
      <div class="card-face card-face--front">
        <div class="card-face--front-border" />
      </div>
      <div class="card-face card-face--back">
        <div class="card_content">
          <div class="card_header">
            <img
              src="../assets/card_frontend_img.svg"
              alt="icon"
              class="card-img"
            >
          </div>
          <div class="card_body">
            <div class="card_title">
              <h3>{{ title }}</h3>
            </div>
            <div class="card-description">
              <li v-for="item in items" :key="item">
                {{ item }}
              </li>
            </div>
            <div class="card-footer">
              <img src="/dot_simbol.svg" alt="dot-simbol">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  },
  data () {
    return {
      // items: ["HTML", "CSS", "JAVASCRIPT", "VUE.JS"],
    }
  },
  methods: {
    Flip (card) {
      card.classList.toggle('is-flipped')
    },
    CallFlipCard () {
      // Essa chamada pega o exatdo elemento no contexto interno desse componente
      // https://blog.logrocket.com/getting-element-component-vue-queryselector/
      const card = this.$el.querySelector('.card-inner')
      card.addEventListener('click', this.Flip(card))
    }
  }
}
</script>

<style scoped>
/* TODO tamanho dimanico */

.card {
  width: 250px;
  height: 360px;
  margin: 10px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.4);
}

.card-face--front {
  background-image: url("../assets/card_logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #001021;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-face--front-border {
  padding: 10px;
  height: 86%;
  width: 80%;
  border-style: solid;
  border-width: 5px;
  border-color: #f7f7ff;
  border-radius: 6px;
}

.card-face--back {
  background-color: #f7f7ff;
  transform: rotateY(180deg);
}

.card_content {
  width: 100%;
  height: 100%;
}

.card_header {
  position: relative;
  padding: 20px 30px;
  text-align: center;
}

.card_header:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-color: #001021;
}

.card-img {
  width: 120px;
  height: 120px;
  /*margin: 0 auto 30px;*/
  border-radius: 50%;
  object-fit: cover;
}

.card_body h3 {
  font-family: "Righteous", cursive;
  text-decoration: none;
  color: #f7f7ff;
  letter-spacing: 3px;
  font-size: 20px;
  margin: 0;
}

.card_title {
  background-color: #fe5f55;
  padding: 10px 0;
  width: 100%;
}
.card-description {
  padding: 15px 30px 0px;
}
.card-description li {
  list-style: none;
  font-family: "Roboto Condensed", cursive;
  font-weight: bold;
  font-size: 1.2rem;
}
.card-footer {
  position: absolute;
  right: 15px;
  bottom: 10px;
}
</style>
