<template>
  <CParagraph text="Explora el Universo del Anime"></CParagraph>

  <section class="v-start__wrapper">
    <article
      v-for="(limo, index) in limos"
      :key="index"
      class="v-start__limo"
      :class="limo.inverted ? '--inverted' : ''"
    >
      <SpiritElement
        class="v-start__limo--spirit"
        :background="limo.background"
        :gradient="limo.gradient"
        :eyeD="limo.eyeD"
        :eyeI="limo.eyeI"
        :backgroundColor="limo.backgroundColor"
        :shadowColor="limo.shadow"
      />
      <CBocadillo
        class="v-start__limo--text"
        :left="limo.left"
        :right="limo.right"
        :rotate="limo.rotate"
        :component="limo.component"
      />
    </article>
  </section>

  <!-- <div class="peito">
    <SpiritElement
      class="v-spiritElement__water"
      :backgroundColor="water.backgroundColor"
      :shadowColor="water.shadow"
    />
    <CBocadillo :left="bocadilloDer.left" :rotate="bocadilloDer.rotate" />
    <SpiritElement
      class="v-spiritElement__fire"
      :background="fire.background"
      :gradient="fire.gradient"
      :eyeD="fire.eyeD"
      :eyeI="fire.eyeI"
      :backgroundColor="fire.backgroundColor"
      :shadowColor="fire.shadow"
    />
    <CBocadillo :right="bocadilloIzq.right" :rotate="bocadilloIzq.rotate" />
    <SpiritElement
      class="v-spiritElement__earth"
      :background="earth.background"
      :gradient="earth.gradient"
      :eyeD="earth.eyeD"
      :eyeI="earth.eyeI"
      :backgroundColor="earth.backgroundColor"
      :shadowColor="earth.shadow"
    />
    <CBocadillo :left="bocadilloDer.left" :rotate="bocadilloDer.rotate" />
    <SpiritElement
      class="v-spiritElement__electric"
      :background="electric.background"
      :gradient="electric.gradient"
      :eyeD="electric.eyeD"
      :eyeI="electric.eyeI"
      :backgroundColor="electric.backgroundColor"
      :shadowColor="electric.shadow"
    />
    <CBocadillo :right="bocadilloIzq.right" :rotate="bocadilloIzq.rotate" />
  </div> -->
</template>

<script>
import CParagraph from '../components/c-paragraph.vue'
import CBocadillo from '../components/c-bocadillo.vue'
import SpiritElement from '../components/c-spiritElement.vue'
import CustomComponent from '../components/c-customComponent.vue'
import CBanner from '../components/c-banner.vue'
import Calendar from '../components/c-calendar.vue'

const limos = [
  {
    backgroundColor: 'rgb(137, 209, 231)',
    shadow: 'rgba(255, 255, 255, 0.8)',
    left: '-11%',
    rotate: '90deg',
    component: CBanner
  },
  {
    background: 'red',
    gradient: 'linear-gradient(to bottom, rgb(255, 51, 0),rgb(255, 123, 0))',
    eyeD: 'rgb(255, 123, 0)',
    eyeI: 'rgb(255, 123, 0)',
    backgroundColor: 'rgb(243, 126, 90)',
    right: '-11%',
    rotate: '270deg',
    shadow: 'rgb(255, 255, 255)',
    component: Calendar,
    inverted: true
  },
  {
    background: 'rgb(58, 31, 5)',
    gradient: 'linear-gradient(to bottom,rgb(91, 180, 27),rgb(42, 46, 40))',
    eyeD: 'rgb(91, 180, 27)',
    eyeI: 'rgb(91, 180, 27)',
    beforeTop: '75%',
    backgroundColor: 'rgb(116, 235, 4)',
    left: '-11%',
    rotate: '90deg',
    shadow: 'rgb(255, 255, 255)',
    component: CustomComponent
  },
  {
    background: 'rgb(255, 136, 0)',
    gradient: 'linear-gradient(to bottom, rgb(223, 201, 8), rgb(224, 162, 28))',
    eyeD: 'rgb(224, 162, 28)',
    eyeI: 'rgb(224, 162, 28)',
    backgroundColor: 'rgb(231, 255, 13)',
    shadow: 'rgb(255, 255, 255)',
    right: '-11%',
    rotate: '270deg',
    component: CustomComponent,
    inverted: true
  }
]

export default {
  components: {
    CParagraph,
    CBocadillo,
    SpiritElement,
    CustomComponent,
    CBanner,
    Calendar
  },
  data() {
    return {
      limos: limos
    }
  }
}
</script>

<style lang="scss" scoped>
.v-start__wrapper {
  padding-bottom: 50px;
  padding-top: 20px;
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.v-start__limo {
  position: relative;
  height: 100%;
  width: 90%;
  display: flex;
  gap: 60px;
  flex-direction: row;
  align-items: center;
}

.v-start__limo--spirit {
}

.v-start__limo--text {
}

.--inverted {
  flex-direction: row-reverse;
}

@media only screen and (max-width: 900px) {
  .v-start__limo--spirit {
    position: absolute;
    top: -90px;
    left: -80px;
    transform: scale(0.2);
    z-index: 999;
  }
}
</style>
