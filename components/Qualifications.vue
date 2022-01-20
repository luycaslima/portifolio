<template>
  <section class="qualifications">
    <h2>Qualificações</h2>
    <div class="qualification-container">
      <div class="qualification-tabs">
        <div class="qualification-button">
          <img src="/formacao_icon_click.svg" alt="formation icon">
          <h3>Formação</h3>
        </div>
        <!--
        <div class="qualification-button">
          <img src="../assets/work_icon_normal.svg" alt="work icon" />
          <h3>Trabalho</h3>
        </div>-->
      </div>
      <div class="qualification-sections">
        <div class="qualification-content">
          <div class="qualification-data">
            <div>
              <h3 class="qualification-title">
                Engenharia da Computação
              </h3>
              <span class="qualification-subtitle">Graduação na Universidade Federal de Sergipe</span>
              <div class="qualification-calendar">
                <img src="/calendar_icon.svg" alt="calendar icon">
                Janeiro 2014 - 2019
              </div>
            </div>
            <div>
              <span class="qualification-rounder"> <img src="" alt=""></span>
              <span class="qualification-line" />
            </div>
          </div>
          <!-- Qualificacao 1 -->
          <div class="qualification-data">
            <div />
            <div>
              <span class="qualification-rounder" />
              <span class="qualification-line" />
            </div>

            <div>
              <h3 class="qualification-title">
                Ciência da Computação
              </h3>
              <span class="qualification-subtitle">Graduação na Universidade Federal de Sergipe</span>
              <div class="qualification-calendar">
                <img src="/calendar_icon.svg" alt="calendar icon">
                Janeiro 2019 - 2022 (Transferência Interna)
              </div>
            </div>
          </div>
          <div class="qualification-data">
            <div>
              <h3 class="qualification-title">
                Mestrando em Ciência da Computação
              </h3>
              <span class="qualification-subtitle">Universidade Federal de Sergipe</span>
              <div class="qualification-calendar">
                <img src="/calendar_icon.svg" alt="calendar icon">
                Dezembro 2022
              </div>
            </div>

            <div>
              <span class="qualification-rounder" />
              <!-- <span class="qualification-line"></span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// https://www.youtube.com/watch?v=27JtRAI3QO8&t=353s
export default {
  name: 'QualificationsModule'
}
</script>

<style scoped>
.qualification-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 0.83em;
}
.qualification-button {
  margin: 20px 0;
  width: 200px;
  height: 35px;
  display: flex;
  font-size: 1em;
  text-align: center;
  align-items: center;
  /*cursor: pointer; */
  justify-content: space-evenly;
}

/*
.qualification-button:hover h3 {
    color: #fe5f55;
    transition: 0.3s;
}
.qualification-button:hover img{
    filter: invert(50%) sepia(30%) saturate(3514%) hue-rotate(328deg) brightness(104%) contrast(99%);
}*/

.qualification-data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  text-align: left;
  min-height: 120px;
}

.qualification-title {
  font-size: 18px;
  color: #001021;
  margin: 5px 0;
  text-align: left;
}

.qualification-subtitle {
  display: inline-block;
  font-family: "Roboto Condensed", cursive;
  font-size: 17px;
  margin-bottom: 10px;
  color: #495867;
  font-weight: 500;
}
.qualification-calendar {
  font-family: "Roboto Condensed", cursive;
  color: #577399;
  align-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.qualification-calendar img {
  margin-right: 10px;
}

.qualification-content {
  justify-content: center;
}
.qualification-rounder {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("/dot_simbol.svg");
  background-repeat: no-repeat;
  background-position: center;

}
.qualification-line {
  display: block;
  width: 4px;
  height: 83%;
  background-color: #bdd5ea;
  transform: translate(8px,-2px);

}

h3 {
  font-family: "Righteous", cursive;
  font-size: 20px;

  color: #fe5f55;
  letter-spacing: 1px;
  margin: 10px 0;
}
</style>
