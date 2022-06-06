<template>
  <div class="md:flex items-center">
    <div
      class="experience-names flex md:flex-col flex-row md:justify-start justify-around text-center md:px-2 text-xl min-w-fit"
    >
      <img :src="processImage" alt="">
    </div>
    <div class="pl-6 flex flex-col content-around md:justify-start">
      <div class="py-2 items-center md:justify-left md:m-0">
        <h2 class="text-3xl md:text-left text-center">
          {{ project.title }}
        </h2>
      </div>
      <p class="text-lg text-justify md:justify-start">
        <!--TODO Checar aqui se tem descrição se não tiver por o texto de busca de emprego -->
        {{ project.description }}
      </p>
      <div v-if=" project.technologies[0] !== 'Tópicos'" class="text-xl sm:justify-center md:justify-start md:text-left text-center my-2 flex flex-row">
        <li v-for="technology in project.technologies" :key="technology" class="pr-2">
          {{ technology }}
        </li>
      </div>
      <div class="flex flex-row justify-center md:justify-end">
        <a :href="project.repository" class=" max-w-fit pr-2 " target="_blank"><img src="~assets/github.svg" alt="github"></a>
        <a v-if="project.externalLink !== ''" :href="project.externalLink" class=" max-w-fit pr-2" target="_blank"><img src="~assets/external_link.svg" alt="github"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => {
        return {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ut nulla ac ultricies. Nullam sed tortor sit amet odio semper aliquet ac sed enim. Nam a eros ac odio tempus pharetra quis id felis. In blandit est turpis, in varius diam malesuada a. Nullam suscipit at lacus a vestibulum.',
          externalLink: '',
          technologies: ['Tópicos'],
          repository: '',
          image: '' // TODO solucionar com isso https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
        }
      }
    }
  },
  computed: {
    processImage () {
      if (!this.project.image) {
        return require('../assets/project_img_placeholder.svg')
      }

      return require(`../assets/${this.project.image}`)
    }
  }
}
</script>
