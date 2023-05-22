<template>
  <div class="wrap">
    <div class="c-banner__container">
      <div class="front"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="back"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="top"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="bottom">bottom</div>
      <div class="left"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="right"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
    </div>
    <div class="c-banner__container">
      <div class="front"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="back"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="top"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="bottom">bottom</div>
      <div class="left"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
      <div class="right"><img class="c-banner__container__img" src="../assets/eliminar.png" /></div>
    </div>
  </div>
</template>

<style>
.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  perspective: 800px;
  perspective-origin: 50% -100px;
}
.c-banner__container {
  margin: 150px;
  width: 50px;
  height: 30px;
  display: inline-block;
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
}
.c-banner__container div {
  position: absolute;
  width: 200px;
  height: 200px;
}
.back {
  border: 1px solid black;
  transform: translateZ(-100px) rotateY(180deg);
}
.right {
  border: 1px solid black;
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
}
.left {
  border: 1px solid black;
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
}
.top {
  border: 1px solid black;
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
}
.bottom {
  border: 1px solid black;
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
}
.front {
  border: 1px solid black;
  transform: translateZ(100px);
}
.c-banner__container__img {
  width: 100%;
}
@keyframes spin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

.c-banner__container {
  animation: spin 5s infinite linear;
}
</style>
