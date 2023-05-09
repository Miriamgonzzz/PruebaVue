<template>
  <CParagraph text="Explora el Universo del Anime"></CParagraph>
  <SpiritElement
    class="v-spiritElement__water"
    :beforeTop="water.beforeTop"
    :beforeColor="water.beforeColor"
  />
  <SpiritElement
    class="v-spiritElement__fire"
    :background="fire.background"
    :gradient="fire.gradient"
    :eyeD="fire.eyeD"
    :eyeI="fire.eyeI"
    :beforeTop="fire.beforeTop"
    :beforeColor="fire.beforeColor"
  />
  <SpiritElement
    class="v-spiritElement__earth"
    :background="earth.background"
    :gradient="earth.gradient"
    :eyeD="earth.eyeD"
    :eyeI="earth.eyeI"
  />
  <SpiritElement
    class="v-spiritElement__electric"
    :background="electric.background"
    :gradient="electric.gradient"
    :eyeD="electric.eyeD"
    :eyeI="electric.eyeI"
    :beforeColor="electric.beforeColor"
  />
</template>

<script>
import CParagraph from '../components/c-paragraph.vue'
import SpiritElement from '../components/c-spiritElement.vue'

export default {
  components: {
    CParagraph,
    SpiritElement
  },
  data() {
    return {
      water: {
        beforeTop: '31%',
        beforeColor: 'rgb(224, 162, 28)'
      },
      fire: {
        background: 'red',
        gradient: 'linear-gradient(to bottom, rgb(255, 51, 0),rgb(255, 123, 0))',
        eyeD: 'rgb(255, 123, 0)',
        eyeI: 'rgb(255, 123, 0)',
        beforeTop: '65%',
        beforeColor: 'rgb(224, 162, 28)'
      },
      earth: {
        background: 'rgb(58, 31, 5)',
        gradient: 'linear-gradient(to bottom,rgb(91, 180, 27),rgb(42, 46, 40))',
        eyeD: 'rgb(91, 180, 27)',
        eyeI: 'rgb(91, 180, 27)'
      },
      electric: {
        background: 'rgb(251, 255, 0)',
        gradient: 'linear-gradient(to bottom, rgb(223, 201, 8), rgb(224, 162, 28))',
        eyeD: 'rgb(224, 162, 28)',
        eyeI: 'rgb(224, 162, 28)',
        beforeColor: 'rgb(91, 180, 27)'
      }
    }
  }
}
</script>
