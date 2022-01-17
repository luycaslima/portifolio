<template>
  <div class="page">
    <div class="title-page">
      <img :src="require('@/assets/title_line.svg')" alt="line">
      <h1>LATEST POSTS</h1>
      <img :src="require('@/assets/title_line.svg')" alt="line">
    </div>
    <div class="articles">
      <div v-for="(article, idx) of articles" :key="idx" class="article">
        <NuxtLink style="text-decoration: none;" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="article-inner">
            <div class="detail">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // TODO: Criar componente de tags
  // TODO: Criar componente de busca
  // TODO: Ver como listar todos os posts ou filtrar 3/4 por página
  // TODO: Ver data do post e quando foi atualizado
  name: 'BlogPostList',
  components: {
  },
  async asyncData ({ $content, params }) {
    // O only pega parametros especificos
    const articles = await $content('articles', params.slug).only(['title', 'description', 'slug']).sortBy('createdAt', 'asc').fetch()

    return { articles }
  }
}
</script>

<style>
.articles{
  text-decoration: none;
}
.article-inner {
  max-width: 100%;
  padding: 5px;
  display: flex;
  margin: auto 5px;
  border-radius: 6px;
  color: #001021;
  border: 5px solid transparent;
  transition: 0.6s;
}

.article-inner:hover{
  border-color: #fe5f55;
}

.article-inner .detail{
  padding-left: 15px;
  padding-right: 15px;
}

.detail p {
  text-align: left;
  font-size: 18px;
}

</style>
