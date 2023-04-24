<template>
      <section class="l-inicio">
        <div class="l-inicio__contenedor">
            <slot name="titulo"></slot>
            <slot name="form"></slot>
            <slot name="parrafo"></slot>
            <slot name="button"></slot>
        </div>

      </section>
    
</template>

<script>

export default {
   name: 'LInicio'
}
</script>

<style lang="scss">
.l-inicio{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.l-inicio__contenedor{
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-border-contenedor);
    background: var(--color-background-contenedor);
    border-radius:20px ;  
}

</style>