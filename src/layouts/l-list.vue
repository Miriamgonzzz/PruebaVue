<template>
  <section class="l-list__container">
    <slot name="title"></slot>
    <div class="l-list__cards">
      <slot name="list"></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.l-list__cards {
  padding: 30px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  justify-content: center;
}
</style>
