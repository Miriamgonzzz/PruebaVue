<template>
  <CParagraph text="Explora el Universo del Anime"></CParagraph>
  <div class="peito">
    <SpiritElement
      class="v-spiritElement__water"
      :backgroundColor="water.backgroundColor"
      :shadowColor="water.shadow"
    />
    <SpiritElement
      class="v-spiritElement__fire"
      :background="fire.background"
      :gradient="fire.gradient"
      :eyeD="fire.eyeD"
      :eyeI="fire.eyeI"
      :backgroundColor="fire.backgroundColor"
      :shadowColor="fire.shadow"
    />
    <SpiritElement
      class="v-spiritElement__earth"
      :background="earth.background"
      :gradient="earth.gradient"
      :eyeD="earth.eyeD"
      :eyeI="earth.eyeI"
      :backgroundColor="earth.backgroundColor"
      :shadowColor="earth.shadow"
    />
    <SpiritElement
      class="v-spiritElement__electric"
      :background="electric.background"
      :gradient="electric.gradient"
      :eyeD="electric.eyeD"
      :eyeI="electric.eyeI"
      :backgroundColor="electric.backgroundColor"
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
        backgroundColor: 'rgba(250, 250, 250, 0.705)',
        shadow: 'rgba(255, 255, 255, 0.8)'
      },
      fire: {
        background: 'red',
        gradient: 'linear-gradient(to bottom, rgb(255, 51, 0),rgb(255, 123, 0))',
        eyeD: 'rgb(255, 123, 0)',
        eyeI: 'rgb(255, 123, 0)',
        //beforeTop: '48%',
        backgroundColor: 'rgb(218, 75, 18)',
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.peito {
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(10, 233, 10);
  //align-items: end;
}
.v-spiritElement__water {
  align-self: flex-start;
}
.v-spiritElement__fire {
  align-self: flex-end;
}
.v-spiritElement__earth {
  align-self: flex-start;
}

.v-spiritElement__electric {
  align-self: flex-end;
}
</style>
