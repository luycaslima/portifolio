<template>
  <div class="my-2 relative flex justify-center typewriter content-center items-center sm:items-center">
    <div class="text-xl text-center items-center content-center">
      <h4 class="tracking-widest">
        Hi, my name is
      </h4>
      <span class="text-8xl text-secondary py-2">
        {{ displayText.join("") }}<span class="cursor">|</span>
      </span>
      <h4 class="tracking-widest">
        Computer Scientist | Fullstack Developer
      </h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Typewriter',
  props: {
    speed: {
      type: Number,
      default: 470
    },
    deleteSpeed: {
      type: Number,
      default: 166
    },
    nextWordInterval: {
      type: Number,
      default: 1300
    }
  },
  data () {
    return {
      words: ['Lucas Lima', 'L22L'],
      displayText: [],
      currentWord: '',
      wordIdx: 0,
      timeoutSpeed: null,
      isWaitingNextWord: false
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split('')
        this.timeoutSpeed = this.speed
        this.animate = setTimeout(this.type, this.timeoutSpeed)
      }
    },
    type () {
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift()) // Pegando a primeira letra da palavra atual, popando e retornando
        this.timeoutSpeed = this.speed
        this.animate = setTimeout(this.type, this.timeoutSpeed) // looping até pegar todas as letras
      } else { // Digitou a palavra toda
        this.isWaitingNextWord = true
        this.timeoutSpeed = this.nextWordInterval
        this.animate = setTimeout(this.delete, this.timeoutSpeed)
      }
    },
    delete () {
      if (this.displayText.length > 0) {
        this.displayText.pop()
        this.timeoutSpeed = this.deleteSpeed
        this.animate = setTimeout(this.delete, this.timeoutSpeed) // looping até deletar todas as letras
      } else {
        this.isWaitingNextWord = false
        this.timeoutSpeed = this.nextWordInterval
        this.animate = setTimeout(this.nextWord, this.timeoutSpeed)
      }
    },
    nextWord () {
      this.isWaitingNextWord = false
      this.displayText = [] // Reseta o texto
      if (++this.wordIdx >= this.words.length) { // Reinicia o loop de textos visitados
        this.wordIdx = 0
      }
      // Repete os passos do start
      this.currentWord = this.words[this.wordIdx].split('')
      this.timeoutSpeed = this.speed
      this.animate = setTimeout(this.type, this.timeoutSpeed)
    }
  }
}
</script>

<style scoped>
span {
    font-family: 'Righteous', cursive;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.cursor {
  display: inline-block;
  margin-left: -3px;
  animation: blink-animation 1s steps(2, start) infinite;
}

.typewriter{
  min-height: 32vh;
}
</style>
