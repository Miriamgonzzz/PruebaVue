<template>
  <div
    class="c-bocadillo"
    :style="`--after-left:${left}; --after-right:${right}; --after-rotate:${rotate}`"
  >
    <component :is="component" />
  </div>
</template>

<script>
export default {
  props: ['left', 'right', 'rotate', 'component'],

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-bocadillo {
  width: 100%;
  height: 500px;
  position: relative;
  background: rgba(96, 117, 145);
  border-radius: 30px;
  box-shadow: 0 10px 10px black;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.c-bocadillo::after {
  content: '';
  position: absolute;
  top: 50%;
  left: var(--after-left);
  right: var(--after-right);
  transform: rotate(var(--after-rotate));
  border-top: 80px solid rgb(0, 0, 0);
  border-top-color: rgba(96, 117, 145);
  border-left: 0px solid transparent;
  border-right: 70px solid transparent;
  //margin: ­30px 0 0 90px;
}
</style>
