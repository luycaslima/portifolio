<template>
  <div class="page">
    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  // TODO ter uma area de posts sugeridos
  // TODO: ter componente de sumário
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  cursor: pointer;
  max-width: 100%;
}
</style>
