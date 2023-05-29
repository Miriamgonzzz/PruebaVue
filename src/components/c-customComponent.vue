<template>
  <p class="title">Juega con nosotros</p>
  <div class="container">
    <div class="score">{{ score }}</div>
    <div class="game-ready">
      <div class="start-button" :style="{ display: displayButton }" @click="startGame">Start</div>
    </div>
    <div class="game">
      <div class="boll" :style="{ backgroundColor: colorBall }"></div>
      <div
        v-for="(item, index) in divs"
        :key="index"
        class="div_color"
        :style="{
          backgroundColor: index === 1 ? item.color : colorDiv,
          opacity: item.opacity
        }"
        @click="chageColorDiv(index)"
      ></div>
    </div>
    <div class="game-over" v-show="gameOver">
      <h2>Game Over</h2>
      <p>Lo has hecho bien, tu eres el mejor.</p>
      <p>Click para empezar otra vez</p>
    </div>
  </div>
</template>

<script>
import CButton from '../components/c-button.vue'
export default {
  components: { CButton },
  data() {
    return {
      score: 0,
      displayButton: '',
      colors: ['#FF4571', '#FFD145', '#8260F6'],
      colorBall: '',
      colorDiv: '#333344',
      divs: [],
      intervalId: null,
      gameOver: false,
      i: 0,
      number: 0
    }
  },
  methods: {
    startGame() {
      this.displayButton = 'none'
      this.intervalId = setInterval(() => {
        this.colorBall = this.colors[Math.floor(Math.random() * this.colors.length)]
      }, 1000)
      this.intervalId = setInterval(() => {
        this.addDiv()
      }, 4000)
    },
    chageColorDiv(index) {
      this.colorDiv = this.colors[this.i]
      this.i = (this.i + 1) % this.colors.length
    },
    addDiv() {
      const content = `Div ${this.number}`
      const newItem = { content }
      this.number += 1
      this.divs.push(newItem)
      console.log(this.divs)
      // setTimeout(() => {
      //   this.removeDiv()
      // }, 5000)
    },
    removeDiv() {
      this.divs.splice(0)
    }
    // watch: {
    //   divs: {
    //     handler(newVal) {
    //       if (newVal.length > 0) {
    //         setTimeout(() => {
    //           this.removeDiv(0)
    //         }, 5000)
    //       } else {
    //         this.gameOver = true
    //         clearInterval(this.intervalId)
    //       }
    //     },
    //     deep: true
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 10px 0 5px 0;
  font-size: 23px;
}
$color-dark: #333344;

.container {
  width: 100%;
  height: 90%;

  .score {
    width: 100%;
    text-align: center;
    font-size: 7vh;
    color: $color-dark;
  }
  .game-ready {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .start-button {
      border: 3px solid $color-dark;
      padding: 10px 20px;
      background-color: transparent;
      color: $color-dark;
      font-size: 20px;
    }
  }
  .game-ready:hover {
    cursor: pointer;
  }

  .game {
    width: 100%;
    height: 320px;
  }
  .boll {
    top: 10px;
    left: 60px;
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 40px;
    animation: jump 3s;
    animation-iteration-count: infinite;
  }
  @keyframes jump {
    0% {
      transform: translateY(0%);
      -webkit-animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(170px);
      -webkit-animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0%);
      -webkit-animation-timing-function: ease-in;
    }
  }
  .div_color {
    top: 250px;
    position: absolute;
    width: 70px;
    height: 250px;
    animation: slide-in 9s linear infinite;
  }
  .div_color:hover {
    cursor: pointer;
  }
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(470%);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  .game-over {
    position: absolute;
    top: 200px;
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    * {
      color: $color-dark;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: 40px;
    }
  }
}
</style>
