<template>
  <div class="container">
    <div class="c-spirit__element" :style="{ background: background }">
      <div class="insaid" :style="{ background: gradient }">
        <div class="c-spirit__eyeD">
          <div class="c-spirit__eyeD__pupila" :style="{ background: eyeD }"></div>
        </div>
        <div class="c-spirit__eyeI">
          <div class="c-spirit__eyeI__pupila" :style="{ background: eyeI }"></div>
        </div>
      </div>
    </div>
    <div
      class="c-spirit__puddle"
      :style="`--before-top: ${beforeTop}; --before-color: ${beforeColor}; --after-top: ${afterTop};--shadow-color: ${shadowColor};`"
    ></div>
    <div
      class="c-spirit__shadow"
      :style="`--before-top: ${beforeTop}; --before-color: ${beforeColor}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: [
    'background',
    'gradient',
    'eyeD',
    'eyeI',
    'beforeTop',
    'beforeColor',
    'afterTop',
    'shadowColor'
  ],

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  //display: inline-block;
  //width: 40%;
  position: relative;
  border: 1px solid black;
}
.c-spirit__element {
  //margin: 0;
  //left: 6%;
  width: 260px;
  height: 270px;
  display: inline-block;
  position: relative;
  //border-radius: 60px;
  -webkit-clip-path: path(var(--path));
  clip-path: path(var(--path));
  //transform: translate(-50%, -50%);
  animation: wave 3s infinite linear;
  background: rgb(65, 4, 235);
  //rgb(65, 4, 235)
  z-index: 2;
}
.insaid {
  //margin: 0 10px 0 0;
  position: absolute;
  top: 5px;
  left: 7px;
  right: 10px;
  bottom: 5px;
  background: linear-gradient(to bottom, rgb(20, 208, 233), #116bbe);
  -webkit-clip-path: path(var(--path));
  clip-path: path(var(--path));
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.c-spirit__eyeD {
  width: 20px;
  height: 60px;
  border: 1px solid #000000;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  overflow: hidden;
}

.c-spirit__eyeD__pupila {
  margin-top: 30px;
  width: 15px;
  height: 15px;
  border: 1px solid #000000;
  border-radius: 50%;
  background: rgb(47, 0, 255);
}

.c-spirit__eyeI {
  width: 20px;
  height: 60px;
  border: 1px solid #000000;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  overflow: hidden;
}

.c-spirit__eyeI__pupila {
  margin-top: 30px;
  width: 15px;
  height: 15px;
  border: 1px solid #000000;
  border-radius: 50%;
  background: rgb(47, 0, 255);
}
// .c-spirit__puddle {
//   width: 100%;
//   height: 50px;
//   //position: relative;
//   background: black;
// }
.c-spirit__shadow {
  //content: '';
  position: absolute;
  background-color: var(--before-color);
  display: inline-block;
  // margin-left: -90.2%;
  // // margin-right: 0.3%;
  // margin-top: 0%;
  //31%
  left: 0.5%;
  //transform: translate(-50%, -50%);
  width: 270px;
  height: 290px;
  -webkit-clip-path: path(var(--path));
  clip-path: path(var(--path));
  z-index: 0;
  box-shadow: 0 0 10px var(--shadow-color);
  animation: wave 3s infinite linear;
}
.c-spirit__puddle {
  //content: '';
  position: absolute;
  background-color: var(--before-color);
  // margin-left: 2%;
  // margin-right: 4%;
  // margin-top: 13%;
  display: inline-block;
  top: 87%;
  //61%
  left: 18.5%;
  //transform: translateX(-50%);
  width: 150px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 10px var(--shadow-color);
  animation: ripple 3s infinite ease-in-out;
}

@keyframes wave {
  0% {
    transform: translateY(-30%) scale(1);
  }
  50% {
    transform: translateY(30%) scaleY(0.3) scaleX(1.2);
  }
  100% {
    transform: translateY(-30%) scale(1);
  }
}

@keyframes ripple {
  0% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(0%) scale(1.3);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
}
</style>
