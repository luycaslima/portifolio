<template>
  <div class="page">
    <div class="title-page">
      <img src="../static/title_line.svg" alt="line">
      <h1>ABOUT</h1>
      <img src="../static/title_line.svg" alt="line">
    </div>
    <div class="name-description">
      <div class="description">
        <h1>Lucas Lima</h1>
        <h3>Computer Scientist | Front-End | Game developer</h3>
        <p>
          Sou estudante de Ciência da Computação. Desenvolvedor frontend e de
          jogos.
        </p>
        <p><strong>Email:</strong> luycaslima@gmail.com</p>
      </div>
      <div id="description-image">
        <img src="../assets/profile_pic.svg" alt="profile image">
      </div>
    </div>
    <section class="skills">
      <h2>Skills</h2>
      <div class="skill-container">
        <Card :title="frontEnd.title" :items="frontEnd.items" />
        <Card :title="gameDev.title" :items="gameDev.items" />
        <Card :title="ferramentas.title" :items="ferramentas.items" />
      </div>
    </section>
    <Qualifications />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Qualifications from '../components/Qualifications.vue'

// TODO: Adaptar o grid da lista de jogos para as cartas no about
export default {
  name: 'About',
  components: {
    Card,
    Qualifications
  },
  data () {
    return {
      frontEnd: {
        title: 'Front-end',
        image: '../assets/card_frontend_img.svg',
        items: ['Html', 'CSS', 'Javascript', 'Vue.js', 'Nuxt.js']
      },
      ferramentas: { title: 'Ferramentas', items: ['Git', 'Scrum'] },
      gameDev: {
        title: 'Game-dev',
        items: ['Unity', 'Godot', 'Rust', 'C++/SDL']
      }
    }
  }
}
</script>

<style scoped>
.name-description {
  padding: 10px;
  text-align:center;
  margin: auto 20px;
}

.description h1 {
  font-family: "Righteous", cursive;
  letter-spacing: 3px;
  color: #fe5f55;
  margin: auto;
  font-size: 40px;
}

.description p {
  text-align: center;
  font-size: 18px;
}

.skills {
  padding: 10px;
  align-items: center;
}
.skills p {
  padding: 15px;
}
.skill-container {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (min-width: 840px) {
  .skill-container {
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    width: 100%;
    justify-content: space-between;
  }
  .name-description {
    border-style: solid;
    border-width: 5px;
    border-color: #fe5f55;
    display: flex;
    margin: auto 5px;
    border-radius: 6px;
  }

  .description h3{
    text-align: left;
  }

  .description {
    padding: 45px 20px;
    text-align: left;
  }

  .description p {
    text-align: left;
  }

  .skills {
    padding: 10px 0;
  }

  #description-image {
    padding: 20px;
  }
}
</style>
