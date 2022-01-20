<template>
  <div class="page">
    <div class="title-page">
      <img src="/title_line.svg" alt="line">
      <h1>GAMES</h1>
      <img src="/title_line.svg" alt="line">
    </div>
    <div class="GalleryContainer">
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">PUTA NOME GRANDE</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>
      <a href="#">
        <div class="picture-container">
          <img src="/Image_placeholder_colored.svg" alt="">

          <div class="text-picture-container">
            <div class="picture-text">NOME</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  // TODO: Gerar componente que redirecionara para pág _slug dessa pasta
  // TODO: Criar a página default do projeto (_slug)
  name: 'Games',
  components: {
  }
}
</script>

<style>

.GalleryContainer {
    padding-left: 20px;
    width: 100%;
    align-items: center;
    display: grid;
    grid-gap: 17px;
    grid-template-columns: repeat(1 , minmax( calc(250px * 1), 1fr));
    margin: 0px -20px;
}

.GalleryContainer img{
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}
.text-picture-container {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.picture-container:hover .text-picture-container{
  opacity: 1;
}

.picture-text {
  color:#F7F7FF;
  font: 400 3em/1 'Righteous', cursive;
  padding: 16px 32px;
}

.GalleryContainer a {
    transition: .5s ease;
    filter: grayscale(100%);
}
.GalleryContainer a:hover {
    filter: grayscale(0%);
}

/* Desktop Mode*/
@media only screen and (min-width: 840px) {

    .GalleryContainer{
        grid-template-columns: repeat( auto-fit , minmax( calc(250px * 1) , 1fr));
        margin-bottom: 50px;
    }
}

</style>
