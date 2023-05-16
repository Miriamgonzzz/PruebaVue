<template>
  <p class="title">Nuevos lanzamientos</p>
  <div class="container">
    <div class="superior">
      <Calendar v-model="selectedDate" :now="today" borderless />
    </div>
    <div class="inferior">Pepo</div>
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar'
export default {
  components: { Calendar, DatePicker },
  data() {
    return {
      selectedDate: null,
      today: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 23px;
}
.container {
  width: 95%;
  display: flex;
  //justify-content: center;
  //align-items: center;
  gap: 10px;
  border: 2px solid black;
}
.superior {
  width: 100%;
  background: red;
}
.vc-container .vc-weekday-1,
.vc-container .vc-weekday-7 {
  color: #6366f1;
}
.inferior {
  width: 45%;
  height: 100%;
  background: rgb(2, 6, 255);
}
</style>
