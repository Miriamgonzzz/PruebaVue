<template>
  <p class="title">Nuevos lanzamientos</p>
  <div class="container">
    <div class="superior">
      <DatePicker
        @selected="handleDateSelected"
        :attributes="attrs"
        v-model="selectedDate"
        borderless
      />

      <div class="inferior" v-if="displayDiv && selectedTitle.length > 0">
        <div class="los">
          <img class="cross" src="../assets/eliminar.png" alt="cross" @click="displayNoneDiv" />
        </div>
        <p class="select">Fecha seleccionada: {{ formattedDate }}</p>
        <div class="pepr">
          <div class="inferior__element" v-for="res in selectedTitle" :key="res.id">
            <p>{{ res.title }}</p>
            <p>Tipo: {{ res.type }}</p>
            <p>Episodios: {{ res.episodes }}</p>
            <img class="inferior__element__img" :src="res.image_url" alt="imagenes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import { releasesStore } from '../stores/releases'

export default {
  components: { Calendar, DatePicker },
  data() {
    return {
      releases: [],
      res: [],
      fechas: [],
      selectedDate: null,
      attrs: [
        {
          key: 'today',
          content: true,
          highlight: {
            color: 'red',
            fillMode: 'solid',
            contentClass: 'italic'
          },
          dates: [new Date()]
        },
        {
          bar: 'blue'
          // dates: this.fechas.map((fecha) => {
          //   const [day, month, year] = fecha.split('/')
          //   return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          // })
        }
      ]
    }
  },
  computed: {
    formattedDate() {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

      if (this.selectedDate) {
        return this.selectedDate.toLocaleDateString('es-ES', options)
      }
      return new Date().toLocaleDateString('es-ES', options)
    },
    selectedTitle() {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      if (this.selectedDate) {
        const date = this.selectedDate.toLocaleDateString('es-ES', options)
        this.res = []
        for (var i = 0; i < this.releases.length; i++) {
          const fecha = this.releases[i].fechaEstreno
          if (date === fecha) {
            this.res.push(this.releases[i])
          }
        }
      }
      return this.res
    },
    displayDiv() {
      if (this.selectedDate) {
        return 'display:block;'
      }
    }
  },
  methods: {
    handleDateSelected(date) {
      this.selectedDate = date
    },
    displayNoneDiv() {
      this.selectedDate = null
    },
    async getAllRelease() {
      try {
        const useReleaseStore = releasesStore()
        this.releases = await useReleaseStore.fetchReleases()
        this.fetched = true
      } catch (e) {
        this.error = true
      }
    }
  },
  created() {
    this.getAllRelease()

    for (var i = 0; i < this.releases.length; i++) {
      this.fechas.push(this.releases[i].fechaEstreno)
    }
    console.log(this.fechas)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 23px;
}

.container {
  margin: 2%;
  width: 95%;
  display: flex;
  gap: 10px;
  border: 2px solid black;
  border-radius: 20px;
}
.superior :deep(.vc-highlight) {
  //background: #56d30d;
  width: 100%;
  height: 100%;
  //border-radius: 0px;
}
.superior :deep(.vc-bar) {
  background: #56d30d;
}
.superior {
  width: 100%;
}
.superior :deep(.vc-container) {
  width: 100%;
  background: #e0dba1;
  border-radius: 20px;
}
.superior :deep(.vc-focus:focus-within) {
  box-shadow: 0 0 0 2px #b49a07;
}
.superior :deep(.vc-header) {
  height: 40px;
}
.superior :deep(.vc-title),
.superior :deep(.vc-arrow) {
  background: transparent;
  font-size: 25px;
  color: #005b49;
}
.superior :deep(.vc-weekdays) {
  gap: 10px;
}
.superior :deep(.vc-weekday) {
  font-size: 25px;
  background: white;
  color: #005b49;
}
.superior :deep(.vc-weekday-7),
.superior :deep(.vc-weekday-1) {
  color: #56d30d;
}
.superior :deep(.vc-day) {
  height: 55px;
}
.superior :deep(.vc-day-box-center-center) {
  display: inline;
  width: 100%;
}
.superior :deep(.vc-day-content) {
  font-size: 30px;
  width: 100%;
  height: 100%;
}
.superior :deep(.vc-day-content:hover) {
  background: #d6c50a;
}
.superior :deep(.vc-popover-content) {
  width: 200px;
  height: 230px;
  background: bisque;
}
.superior :deep(.vc-nav-arrow) {
  background: transparent !important;
  color: #005b49;
  font-size: 20px;
}
.superior :deep(.vc-nav-title) {
  background: transparent !important;
  color: #005b49;
  font-size: 20px;
}
.superior :deep(.vc-nav-items) {
  margin-left: 10px;
  gap: 5%;
}
.superior :deep(.vc-nav-item) {
  background: white !important;
  color: #005b49;
  font-size: 20px;
  box-shadow: 0px 5px 0px 1px black !important;
}
.inferior {
  margin-top: -60%;
  position: absolute;
  background: white;
  border: 2px solid black;
  z-index: 5;
}
.los {
  margin: 3px;
  display: flex;
  justify-content: end;
}
.cross {
  width: 10%;
}
.select {
  display: flex;
  margin: 0;
  height: 50px;
  font-size: 30px;
  color: white;
  background: #000000;
  justify-content: center;
  align-items: center;
}
.pepr {
  height: 450px;
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.inferior__element {
  display: flex;
  flex-direction: column;
  gap: 5%;
}
.inferior__element__img {
  width: 40%;
}
</style>
