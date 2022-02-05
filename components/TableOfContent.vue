<template>
  <section class="tableofcontent">
    <h3>Summary</h3>
    <div id="toc">
      <ol>
        <li
          v-for="link of toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TableOfContent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['toc'] // contains the text and id of all headlines
}

</script>

<style scoped>

h3 {
    color:#001021;
    text-align: left;
}

</style>
