<template>
  <p class="title">Nuevos lanzamientos</p>
  <div class="container">
    <div class="superior">
      <div class="Fecha">
        <span class="left button" id="prev"> &lang; </span>
        <span class="left hook"></span>
        <span class="month-year" id="label"> June 20&0 </span>
        <span class="right hook"></span>
        <span class="right button" id="next"> &rang; </span>
      </div>
      <table class="dias"></table>
    </div>
    <div class="inferior"></div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 25px;
}
.container {
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid black;
}
.superior {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: red;
}
.Fecha {
  width: 100%;
  background: white;
  margin: 5px;
  height: 15%;
}
.dias {
  margin: 5px;
  width: 100%;
  background: rgb(177, 13, 141);
  height: 100%;
}
.inferior {
  width: 45%;
  height: 100%;
  background: rgb(2, 6, 255);
}
</style>
