<template>
  <div class="page">
    <div class="title-page">
      <img src="/title_line.svg" alt="line">
      <h1>LATEST POSTS</h1>
      <img src="/title_line.svg" alt="line">
    </div>
    <div class="blog-content">
      <div class="articles">
        <div v-for="(article, idx) of articles" :key="idx" class="article">
          <NuxtLink style="text-decoration: none;" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="article-inner">
              <div class="detail">
                <h1>{{ article.title }}</h1>
                <h3>{{ formatDate(article.createdAt) }}</h3>
                <p>{{ article.description }}</p>
              </div>
              <div class="dot-post">
                <img src="/dot_simbol.svg" alt="dot">
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="blog-menu">
        <input id="search-bar" type="text" size="22" placeholder="Buscar...">
        <div class="tags-months">
          <h3>Tags</h3>
          <!-- <h3>Blog Archive</h3> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // TODO: Criar componente de tags
  // TODO: Criar componente de busca
  // TODO: Ver como listar todos os posts ou filtrar 3/4 por página

  // https://gilberttanner.com/blog/creating-a-blog-with-nuxt-content
  // https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#styling-our-markdown-content
  // https://dev.to/ktopouzi/creating-tags-for-your-nuxt-blog-with-nuxt-content-4cc4
  name: 'BlogPostList',
  components: {
  },
  async asyncData ({ $content, params, error }) {
    try {
      // O only pega parametros especificos
      // deep  permite que voce pegue arquivos dentro de subpastas
      const articles = await $content('articles', params.slug, { deep: true }).only(['title', 'description', 'createdAt', 'updatedAt', 'slug']).sortBy('createdAt', 'desc').fetch()

      return { articles }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style >

.blog-content{
  display: flex;
}
.blog-content input{
  border: 3px solid #fe5f55;
  border-radius: 6px;
  padding: 6px;
  font-family: "Righteous", cursive;
  font-size: 16px;
  background: url('./assets/search_icon.svg') ;
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-origin: content-box;
}

.blog-content input , textarea{
   color:#577399;
   letter-spacing: 1px;
}

.blog-content h3{
  text-align: left;
  margin: 10px 10px;
  color: #001021;
}

.blog-menu {
  display: none;
  margin:20px 10px;
}

#search-bar{
  margin-bottom: 10px;
}

#search-bar:focus{
  outline: none;
  background-image: none;
}

.articles{
  text-decoration: none;
}

.article{
  margin: 20px 0;
}

.article-inner {
  min-height: 200px;
  position: relative;
  max-width: 100%;
  padding: 5px;
  display: flex;
  margin: auto 5px;
  border-radius: 6px;
  color: #001021;
  border: 3px solid transparent;
  transition: 0.6s;
}

.article-inner:hover{
  border-color: #fe5f55;
}

.article-inner .detail{
  padding-left: 15px;
  padding-right: 15px;
}

.article-inner h1{
  margin-bottom: 10px;
}

.detail p {
  text-align: left;
  font-size: 18px;
}

.dot-post{
  position: absolute;
  visibility: hidden;
  right: 10px;
  bottom: 10px;
}
.dot-post img{
  opacity: 0;
  transition: 0.6s;
}

.article-inner:hover .dot-post img{
  visibility: visible;
  opacity: 1.0;
}

.article-inner h3{
  text-align: left;
  font-size: 18px;
  color: #577399;
  margin: 5px 0;
}

@media only screen and (min-width: 840px) {
  .blog-menu{
    display: block;
  }
}

</style>
