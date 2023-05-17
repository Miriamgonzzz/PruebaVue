<template>
  <p class="title">Nuevos lanzamientos</p>
  <div class="container">
    <div class="superior">
      <Calendar :attributes="attrs" v-model="selectedDate" borderless />
    </div>

    <!-- <div class="inferior">Pepo</div> -->
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

export default {
  components: { Calendar, DatePicker },
  data() {
    return {
      selectedDate: null,
      today: new Date(),
      attrs: [
        // This is a single attribute
        {
          key: 'today',
          content: true,
          highlight: {
            fillMode: 'solid',
            contentClass: 'italic'
          },
          dates: new Date()
        },
        {
          bar: 'blue',
          dates: [new Date(2023, 4, 5)]
        }
      ]
    }
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
.superior :deep(.vc-day-content) {
  width: '100px';
}
.superior :deep(.vc-highlight) {
  background: #56d30d;
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

.inferior {
  width: 45%;
  height: 100%;
  background: rgb(2, 6, 255);
}
</style>
