<template>
  <div class="page">
    <article>
      <!-- Inserir aqui a img se houver senao ocultar-->
      <h1>{{ article.title }}</h1>
      <h3>{{ formatDate(article.createdAt) }}</h3>
      <div>
        <TableOfContent :toc="article.toc" />
      </div>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
import TableOfContent from '~/components/TableOfContent.vue'

export default {
  components: {
    TableOfContent
  },
  // TODO ter uma area de posts sugeridos
  // TODO: ter componente de sumário
  async asyncData ({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      // const [article] = await $content({ deep: true }).where({ dir: `/${params.slug}` }).fetch()
      return { article }
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
      return new Date(date).toLocaleDateString('pt-br', options)
    }
  }
}
</script>

<style scoped>
article {
  display: block;
  margin: 0 auto;
  /*padding: 50px 30px;*/
  max-width: 100%;
}
h1 {
  font-size: 32px;
  padding: 10px 0 0;
  margin: 20px 0 10px;
}

h3 {
  text-align: left;
  font-size: 18px;
  color: #577399;
}
</style>
