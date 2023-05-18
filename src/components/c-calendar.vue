<template>
  <p class="title">Nuevos lanzamientos</p>
  <div class="container">
    <div class="superior">
      <DatePicker
        @selected="handleDateSelected"
        :attributes="attrs"
        v-model="selectedDate"
        :class="getHighlightClasses"
        borderless
      />

      <p>Fecha seleccionada: {{ formattedDate }}</p>
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
      selectedDate: null,
      //today: new Date(),
      attrs: [
        // This is a single attribute
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
          bar: 'blue',
          dates: [new Date(2023, 4, 5)],
          popover: {
            label: 'descripcion',
            visibility: 'hover',
            hideIndicator: false
          }
        }
      ],
      selectedAnime: null
    }
  },
  computed: {
    getHighlightClasses() {
      return (date) => {
        const classes = []

        if (this.selectedDate && date.toDateString() === this.selectedDate.toDateString()) {
          classes.push('selected-date')
        }

        if (date.toDateString() === new Date().toDateString()) {
          classes.push('current-date')
        }

        return classes
      }
    },
    formattedDate() {
      if (this.selectedDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        console.log(this.selectedDate)
        return this.selectedDate.toLocaleDateString('es-ES', options)
      }
      return new Date().toDateString()
    }
  },
  methods: {
    handleDateSelected(date) {
      this.selectedDate = date
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
    console.log(this.getAllRelease())
    console.log(this.selectedDate)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 23px;
}
.selected-date {
  background-color: #b925ad; /* Color de fondo personalizado */
  color: #ffffff; /* Color de texto personalizado */
}
.current-date {
  background-color: #00ccff; /* Color de fondo para fecha actual */
  color: #000000; /* Color de texto para fecha actual */
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
</style>
