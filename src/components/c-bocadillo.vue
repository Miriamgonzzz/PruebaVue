<template>
  <div
    class="c-bocadillo"
    :style="`--after-left:${left}; --after-right:${right}; --after-rotate:${rotate}`"
  ></div>
</template>

<script>
export default {
  props: ['left', 'right', 'rotate'],

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-bocadillo {
  width: 80%;
  height: 500px;
  position: relative;
  background: red;
  border-radius: 30px;
  grid-column: 2;
  box-shadow: 0 10px 10px black;
}
.c-bocadillo::after {
  content: '';
  position: absolute;
  top: 50%;
  left: var(--after-left);
  right: var(--after-right);
  transform: rotate(var(--after-rotate));
  border-top: 40px solid rgb(0, 0, 0);
  border-top-color: red;
  border-left: 0px solid transparent;
  border-right: 30px solid transparent;
  //margin: ­30px 0 0 90px;
}
</style>
