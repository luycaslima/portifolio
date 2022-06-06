<template>
  <div class="projects max-w-4xl m-auto mt-10 mb-20 pb-10 about px-6 lg:px-0">
    <div class="title md:flex items-center py-8 md:justify-left">
      <div class="items-end flex content-center m-auto md:m-0 justify-center md:justify-left ">
        <h1 class="text-5xl px-2 tracking-wide">
          Projects
        </h1>
      </div>
      <img class="px-4 py-4 md:py-0 m-auto md:m-0" src="~assets/line.svg" alt="line">
    </div>
    <div class="md:flex items-center justify-center ">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsPage',
  data () {
    return {
      projects: [
        {
          title: 'Portifolio\'s site',
          description: 'This is the repository of this portifolio\'s website, made with the purpose of learn Tailwind and Nuxt.js and most important, shown my works',
          technologies: ['Nuxt.js', 'Tailwind.css', 'Vercel'],
          repository: 'https://github.com/luycaslima/portifolio',
          externalLink: '',
          image: 'portifolio_project_logo.svg'
        }
      ]
    }
  }
}

</script>

<style>
.projects{
    min-height: 90vh;
}

</style>
