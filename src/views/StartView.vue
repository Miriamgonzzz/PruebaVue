<template>
  <CParagraph text="Explora el Universo del Anime"></CParagraph>
  <div>
    <SpiritElement
      class="v-spiritElement__water"
      :beforeTop="water.beforeTop"
      :beforeColor="water.beforeColor"
      :afterTop="water.afterTop"
      :shadowColor="water.shadow"
    />
    <SpiritElement
      class="v-spiritElement__fire"
      :background="fire.background"
      :gradient="fire.gradient"
      :eyeD="fire.eyeD"
      :eyeI="fire.eyeI"
      :beforeTop="fire.beforeTop"
      :beforeColor="fire.beforeColor"
      :afterTop="fire.afterTop"
      :shadowColor="fire.shadow"
    />
    <SpiritElement
      class="v-spiritElement__earth"
      :background="earth.background"
      :gradient="earth.gradient"
      :eyeD="earth.eyeD"
      :eyeI="earth.eyeI"
      :beforeTop="earth.beforeTop"
      :beforeColor="earth.beforeColor"
      :afterTop="earth.afterTop"
      :shadowColor="earth.shadow"
    />
    <SpiritElement
      class="v-spiritElement__electric"
      :background="electric.background"
      :gradient="electric.gradient"
      :eyeD="electric.eyeD"
      :eyeI="electric.eyeI"
      :beforeTop="electric.beforeTop"
      :beforeColor="electric.beforeColor"
      :afterTop="electric.afterTop"
      :shadowColor="electric.shadow"
    />
  </div>
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
        //beforeTop: '21.5%',
        beforeColor: 'rgba(250, 250, 250, 0.705)',
        shadow: 'rgba(255, 255, 255, 0.8)'
      },
      fire: {
        background: 'red',
        gradient: 'linear-gradient(to bottom, rgb(255, 51, 0),rgb(255, 123, 0))',
        eyeD: 'rgb(255, 123, 0)',
        eyeI: 'rgb(255, 123, 0)',
        //beforeTop: '48%',
        beforeColor: 'rgb(218, 75, 18)',
        shadow: 'rgb(255, 255, 255)'
      },
      earth: {
        background: 'rgb(58, 31, 5)',
        gradient: 'linear-gradient(to bottom,rgb(91, 180, 27),rgb(42, 46, 40))',
        eyeD: 'rgb(91, 180, 27)',
        eyeI: 'rgb(91, 180, 27)',
        beforeTop: '75%',
        beforeColor: 'rgb(116, 235, 4)',
        shadow: 'rgb(255, 255, 255)'
      },
      electric: {
        background: 'rgb(255, 136, 0)',
        gradient: 'linear-gradient(to bottom, rgb(223, 201, 8), rgb(224, 162, 28))',
        eyeD: 'rgb(224, 162, 28)',
        eyeI: 'rgb(224, 162, 28)',
        beforeTop: '102.5%',
        beforeColor: 'rgb(231, 255, 13)',
        shadow: 'rgb(255, 255, 255)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// div {
//   margin: 10px;
//   display: flex;
//   flex-direction: column;
//   //align-items: end;
// }
// .v-spiritElement__water {
//   align-items: start;
// }
// .v-spiritElement__fire {
//   align-items: end;
// }
// .v-spiritElement__earth {
//   align-items: start;
// }

// .v-spiritElement__electric {
//   align-items: end;
// }
</style>
