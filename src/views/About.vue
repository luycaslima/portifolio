<template>
  <div class="about">
    <div class="title-page" ref="first-title">
      <img src="../assets/title_line.svg" alt="line" />
      <h1>ABOUT</h1>
      <img src="../assets/title_line.svg" alt="line" />
    </div>
    <div class="name-description">
      <div class="description">
        <h1>Lucas Lima</h1>
        <h2>Programmer | Pixel Artist | Artist</h2>
        <p>
          Sou estudante de Ciência da Computação. Desenvolvedor frontend e de
          jogos.
        </p>
      </div>
      <div id="description-image">
        <img src="../assets/profile_pic.svg" alt="profile image" />
      </div>
    </div>

    <h1>Skills</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis nisl
      ultrices, mollis dui vel, facilisis neque. Cras condimentum, tellus sit
      amet sagittis ultricies, velit lorem interdum nibh, ut consequat turpis ex
      id tellus. Sed nec arcu vitae lorem congue aliquam vel a nisi. Cras
      finibus justo sed ipsum semper scelerisque. Aenean pretium orci vitae
      sapien sodales semper. Praesent facilisis justo felis, vel condimentum dui
      aliquam volutpat. Praesent et diam molestie, varius felis sed, varius mi.
      Curabitur efficitur, odio ac efficitur placerat, sapien tortor tempus
      nibh, a venenatis tortor nunc non eros. Cras lacinia pellentesque purus,
      vel tempor tellus varius sit amet. Morbi aliquet metus et sem finibus
      pretium. Pellentesque metus arcu, placerat at iaculis et, varius ac odio.
      Nullam a arcu molestie, scelerisque orci et, varius dui. Mauris posuere
      diam quis iaculis placerat. Aliquam sit amet nunc elementum, placerat
      tortor eget, varius lacus. Sed congue sapien gravida felis pellentesque
      lobortis. Aliquam vitae risus tellus. Nam ullamcorper lacus a purus auctor
      convallis. Etiam sit amet orci vel tellus suscipit semper. Mauris
      pellentesque ullamcorper venenatis. Donec venenatis turpis ut feugiat
      vulputate. In enim nisi, interdum rutrum lorem eu, blandit pharetra nibh.
      Aenean in scelerisque arcu. Mauris iaculis feugiat nisi. Sed vitae tortor
      ullamcorper, lobortis eros sed, mattis sem. Aliquam iaculis tincidunt
      odio, non pharetra est. Integer vitae lacus ut ipsum euismod ullamcorper
      ac nec massa. Suspendisse ultricies condimentum mollis. Sed sit amet nisi
      odio. Ut suscipit efficitur metus, ac pretium ipsum aliquam nec. Nunc
      feugiat sollicitudin urna, ut ornare justo egestas at. Sed vel ligula
      lectus.
    </p>
    <h1>Qualificações</h1>
    
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
#description-image {
  padding: 20px;
}
.name-description {
  border-style: solid;
  border-width: 5px;
  border-color: #fe5f55;
  display: flex;
  padding: 10px;
  max-width: 850px;
  margin: auto;
  align-items: center;
}
.description {
  text-align: left;
  padding: 15px 20px;
}
.description h1 {
  font-family: "Righteous", cursive;
  color: #fe5f55;
  font-size: 38px;
}
h1{
  color: #001021;
}
.description h2 {
  font-family: "Righteous", cursive;
  color: #495867;
  letter-spacing: 3px;
  font-size: 20px;
}

.title-page {
  max-width: 850px;
  margin: 10px auto;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
}

.title-page h1 {
  font-family: "Righteous", cursive;
  font-size: 40px;
  letter-spacing: 5px;
  margin: 20px;
}

#first-title {
  color: #fe5f55;
}

.about {
  margin: 0 18%;
}
</style>