<script setup>
import { RouterLink, RouterView } from 'vue-router'
 import '@/assets/styles/style.scss'
</script>

<template>
  <header>
    
        
  </header>
  <section>

      <RouterView />
    
  </section>

 
</template>

<style lang="scss" scoped>

header{
  width: 30%;
}
section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
