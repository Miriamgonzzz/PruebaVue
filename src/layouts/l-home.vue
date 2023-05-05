<template>
      <section class="l-start">
        <div class="l-start__container">
            <slot name="title"></slot>
            <slot name="form"></slot>
            <slot name="paragraph"></slot>
            <slot name="button"></slot>
        </div>

      </section>
    
</template>

<script>

export default {
   name: 'LHome'
}
</script>

<style lang="scss">
.l-start{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.l-start__container{
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-border-contenedor);
    background: var(--color-background-contenedor);
    border-radius:20px ;  
}

</style>