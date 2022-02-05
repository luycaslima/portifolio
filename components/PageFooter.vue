<template>
  <footer class="content">
    <div class="media">
      <client-only>
        <table>
          <tr>
            <td><img id="line" src="/line.svg" alt="line"></td>
          </tr>
          <tr>
            <div id="buttons">
              <a href="https://www.instagram.com/luycaslima/" target="_blank"><img src="/social/inst.svg" alt="instagram"></a>
              <a href="https://github.com/luycaslima" target="_blank"><img src="/social/github.svg" alt="github"></a>
              <a href="https://github.com/luycaslima" target="_blank"><img src="/social/twit.svg" alt="twitter"></a>
            </div>
          </tr>
        </table>
      </client-only>
    <!-- 2017 - 2020 Lucas Lima -->
    </div>
  </footer>
</template>

<script>

export default {
  name: 'PageFooter',
  components: {
  }
}
</script>

<style >
#line {
  justify-content: center;
  margin: 20px 0px 20px 10px;
}
#buttons {
  position: relative;
  display: flex;
  justify-content: center;
}
#buttons a{
  padding: 0 15px;
}
#buttons img{
  display: block;
  width: 110%;
  height: 110%;
}
.content {
  background-image: url("../assets/background_footer_logo.svg");
  background-repeat: no-repeat;
  background-position: bottom left;
  position: absolute;
  padding: 10px 0px;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
.media{
  display: flex;
  justify-content: center;
}
</style>
