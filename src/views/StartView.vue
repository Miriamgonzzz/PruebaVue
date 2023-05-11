<template>
  <CParagraph text="Explora el Universo del Anime"></CParagraph>
  <div class="peito">
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
  </div>
</template>

<script>
import CParagraph from '../components/c-paragraph.vue'
import CBocadillo from '../components/c-bocadillo.vue'
import SpiritElement from '../components/c-spiritElement.vue'

export default {
  components: {
    CParagraph,
    CBocadillo,
    SpiritElement
  },
  data() {
    return {
      water: {
        backgroundColor: 'rgb(137, 209, 231)',
        shadow: 'rgba(255, 255, 255, 0.8)'
      },
      fire: {
        background: 'red',
        gradient: 'linear-gradient(to bottom, rgb(255, 51, 0),rgb(255, 123, 0))',
        eyeD: 'rgb(255, 123, 0)',
        eyeI: 'rgb(255, 123, 0)',
        backgroundColor: 'rgb(243, 126, 90)',
        shadow: 'rgb(255, 255, 255)'
      },
      earth: {
        background: 'rgb(58, 31, 5)',
        gradient: 'linear-gradient(to bottom,rgb(91, 180, 27),rgb(42, 46, 40))',
        eyeD: 'rgb(91, 180, 27)',
        eyeI: 'rgb(91, 180, 27)',
        beforeTop: '75%',
        backgroundColor: 'rgb(116, 235, 4)',
        shadow: 'rgb(255, 255, 255)'
      },
      electric: {
        background: 'rgb(255, 136, 0)',
        gradient: 'linear-gradient(to bottom, rgb(223, 201, 8), rgb(224, 162, 28))',
        eyeD: 'rgb(224, 162, 28)',
        eyeI: 'rgb(224, 162, 28)',
        backgroundColor: 'rgb(231, 255, 13)',
        shadow: 'rgb(255, 255, 255)'
      },
      bocadilloDer: {
        left: ' -20px',
        rotate: '90deg'
      },
      bocadilloIzq: {
        right: ' -20px',
        rotate: '270deg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.peito {
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 15% 70% 15%);
  gap: 10px;
  border: 1px solid rgb(137, 209, 231);
  align-items: center;
}
.v-spiritElement__water {
  grid-column: 1;
  grid-row: 1;
}
.v-spiritElement__fire {
  grid-column: 3;
  grid-row: 2;
}
.v-spiritElement__earth {
  grid-column: 1;
  grid-row: 3;
}

.v-spiritElement__electric {
  grid-column: 3;
  grid-row: 4;
}
</style>
