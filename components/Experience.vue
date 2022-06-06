<template>
  <div class="experience max-w-4xl m-auto my-20 pb-10 about px-6 lg:px-0">
    <div class="title md:flex items-center py-8 md:justify-left">
      <div
        class="items-end flex content-center m-auto md:m-0 justify-center md:justify-left"
      >
        <h2 class="text-4xl text-secondary px-2 tracking-wide">
          02.
        </h2>
        <h1 class="text-5xl px-2 tracking-wide">
          Experience
        </h1>
      </div>
      <img class="px-4 py-4 md:py-0 m-auto md:m-0" src="~assets/line.svg" alt="line">
    </div>
    <div class="md:flex items-center">
      <div
        class="experience-names flex md:h-[200px] md:flex-col flex-row md:justify-start justify-around text-center md:px-2 text-xl "
      >
        <!-- TODO descobrir como manter o botão em foco se ele for o atual selecionado -->
        <button v-for=" (experience, index) in experiences" :key="experience.name" class="hover:text-secondary transition-color duration-200 py-1 link link-underline link-underline-black" @click="changeText(index)">
          {{ experience.name }}
        </button>
      </div>
      <div class="pl-6 flex flex-col content-around md:justify-start md:h-[200px]">
        <div class="py-2 items-center md:justify-left md:m-0">
          <h2 class="text-3xl md:text-left text-center">
            {{ experienceTitle }}
          </h2>
          <p class="text-xl text-fourth py-1 md:text-left text-center">
            {{ experienceWorkPlace }}
          </p>
          <div class="flex text-darkBG">
            <div v-if="experienceDate != ''" class="pr-2">
              <img src="~assets/Calendar.svg" alt="">
            </div>
            <p>{{ experienceDate }}</p>
          </div>
        </div>
        <p class="text-lg text-justify md:justify-start">
          <!--TODO Checar aqui se tem descrição se não tiver por o texto de busca de emprego -->
          {{ experienceDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceComp',
  data () {
    return {
      experienceTitle: '',
      experienceWorkPlace: '',
      experienceDate: '',
      experienceDescription: '',
      experiences: [{
        name: 'ComunicaLAB',
        title: 'Mobile developer',
        company: 'Federal University of Sergipe - Internship',
        date: 'jan de 2021 - mar de 2021',
        description: 'Development in a mobile app, made in flutter with BLoC, with the objective of logistic management of the department equipments and rooms which users can report if one equipment is broken, check which rooms are reserved and other administrative functions.'
      },
      {
        name: '???',
        title: 'Looking for new experiences',
        company: 'Need my help?',
        date: '',
        description: 'If you are interest in my skills, contact me by my email: lucasl22l@proton.me'
      }]
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.experienceTitle = this.experiences[0].title
    this.experienceDate = this.experiences[0].date
    this.experienceWorkPlace = this.experiences[0].company
    this.experienceDescription = this.experiences[0].description
    // })
  },
  methods: {
    changeText (index) {
      this.experienceTitle = this.experiences[index].title
      this.experienceDate = this.experiences[index].date
      this.experienceWorkPlace = this.experiences[index].company
      this.experienceDescription = this.experiences[index].description
    }
  }
}
</script>

<style>

.experience-names button {
  font-family: "Righteous", cursive;
  min-width: 88px;
}
.experience {
  min-height: 50vh;
}

</style>
