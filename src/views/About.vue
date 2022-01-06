<template>
  <div class="about">
    <div class="title-page">
      <img src="../assets/title_line.svg" alt="line" />
      <h1>ABOUT</h1>
      <img src="../assets/title_line.svg" alt="line" />
    </div>
    <div class="name-description">
      <div class="description">
        <h1>Lucas Lima</h1>
        <h2>Computer Scientist | Front-End | Game developer</h2>
        <p>
          Sou estudante de Ciência da Computação. Desenvolvedor frontend e de
          jogos.
        </p>
      </div>
      <div id="description-image">
        <img src="../assets/profile_pic.svg" alt="profile image" />
      </div>
    </div>
    <section class="skills">
      <h2>Skills</h2>
      <div class="skill-container">

      </div>
    </section>
    <section class="qualifications">
      <h2>Qualificações</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        nisl ultrices, mollis dui vel, facilisis neque. Cras condimentum, tellus
        sit amet sagittis ultricies, velit lorem interdum nibh, ut consequat
        turpis ex id tellus. Sed nec arcu vitae lorem congue aliquam vel a nisi.
        Cras finibus justo sed ipsum semper scelerisque. Aenean pretium orci
        vitae sapien sodales semper. Praesent facilisis justo felis, vel
        condimentum dui aliquam volutpat. Praesent et diam molestie, varius
        felis sed, varius mi. Curabitur efficitur, odio ac efficitur placerat,
        sapien tortor tempus nibh, a venenatis tortor nunc non eros. Cras
        lacinia pellentesque purus, vel tempor tellus varius sit amet. Morbi
        aliquet metus et sem finibus pretium. Pellentesque metus arcu, placerat
        at iaculis et, varius ac odio. Nullam a arcu molestie, scelerisque orci
        et, varius dui. Mauris posuere diam quis iaculis placerat. Aliquam sit
        amet nunc elementum, placerat tortor eget, varius lacus. Sed congue
        sapien gravida felis pellentesque lobortis. Aliquam vitae risus tellus.
        Nam ullamcorper lacus a purus auctor convallis. Etiam sit amet orci vel
        tellus suscipit semper. Mauris pellentesque ullamcorper venenatis. Donec
        venenatis turpis ut feugiat vulputate. In enim nisi, interdum rutrum
        lorem eu, blandit pharetra nibh. Aenean in scelerisque arcu. Mauris
        iaculis feugiat nisi. Sed vitae tortor ullamcorper, lobortis eros sed,
        mattis sem. Aliquam iaculis tincidunt odio, non pharetra est. Integer
        vitae lacus ut ipsum euismod ullamcorper ac nec massa. Suspendisse
        ultricies condimentum mollis. Sed sit amet nisi odio. Ut suscipit
        efficitur metus, ac pretium ipsum aliquam nec. Nunc feugiat sollicitudin
        urna, ut ornare justo egestas at. Sed vel ligula lectus.
      </p>
    </section>
    
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.name-description {
  padding: 10px;
  align-items: center;
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

h2 {
  font-family: "Righteous", cursive;
  color: #001021;
  font-size: 24px;
  letter-spacing: 3px;
}

.description h2 {
  color: #495867;
  font-size: 22px;
}

.title-page img {
  width: 75%;
  height: 75%;
}

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

.skills {
  padding: 10px;
  align-items: center;
}
.skills p {
  padding: 15px;
}


@media only screen and (min-width: 768px) {
  .name-description {
    border-style: solid;
    border-width: 5px;
    border-color: #fe5f55;
    display: flex;
    margin: auto 10px;
  }

  .description {
    padding: 15px 20px;
    text-align: left;
  }

  .description p {
    text-align: left;
  }

  .skills {
    padding: 10px 0;
  }
  .title-page img {
    width: auto;
    height: auto;
  }
  .title-page h1{
    margin: 20px;
  }
  .title-page {
    display: flex;
    justify-content: space-between;
  }
  #description-image {
    padding: 20px;
  }

  .about {
    max-width: 950px;
    margin: 0 auto;
  }
  .about p {
    text-align: justify;
  }
}
</style>