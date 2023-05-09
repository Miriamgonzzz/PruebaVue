<template>
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
    :style="`--before-top: ${beforeTop}; --before-color: ${beforeColor}; --after-top: ${afterTop}; --after-top: ${afterTop};`"
  ></div>
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
    'afterColor'
  ],

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-spirit__element {
  left: 13%;
  width: 260px;
  height: 270px;
  display: inline-block;
  position: relative;
  border-radius: 60px;
  -webkit-clip-path: path(var(--path));
  clip-path: path(var(--path));
  animation: wave 3s infinite linear;
  border-radius: 100px;
  background: rgb(65, 4, 235);
  z-index: 2;
}
.insaid {
  margin: 0 10px 0 0;
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
.c-spirit__puddle {
  width: 100%;
  height: 10px;
  background: black;
}
.c-spirit__puddle::before,
.c-spirit__puddle::after {
  content: '';
  position: absolute;
  background-color: var(--before-color);
}

.c-spirit__puddle::before {
  top: var(--before-top);
  //31%
  left: 13%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 270px;
  -webkit-clip-path: path(var(--path));
  clip-path: path(var(--path));
}

.c-spirit__puddle::after {
  top: var(--after-top);
  //61%
  left: 12%;
  transform: translateX(-50%);
  width: 150px;
  height: 40px;
  border-radius: 50%;
}

.c-spirit__puddle::before,
.c-spirit__puddle::after {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.c-spirit__puddle::before {
  animation: wave 3s infinite linear;
}

.c-spirit__puddle::after {
  animation: ripple 3s infinite ease-in-out;
}

@keyframes wave {
  0% {
    transform: translateX(-50%) translateY(0%) scale(1);
  }
  50% {
    transform: translateX(-50%) translateY(30%) scaleY(0.3) scaleX(1.2);
  }
  100% {
    transform: translateX(-50%) translateY(0%) scale(1);
  }
}

@keyframes ripple {
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.3);
    opacity: 0.7;
  }
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
</style>
