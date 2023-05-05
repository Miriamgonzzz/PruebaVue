<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '@/assets/styles/style.scss'
</script>

<template>
  <header class="v-app__header" v-if="$route.path !== '/'">
    <p class="v-app__paragraph">AnimeFun</p> 
    <div class="v-app__line"></div>   
    <nav class="v-app__navbar">
      <ul class="v-app__ul">
        <li class="v-app__li"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="v-app__li"><RouterLink to="/lista">Animes</RouterLink></li>
        <li class="v-app__li"><RouterLink to="#">Formulario</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>

.v-app__header{
  margin: 0;
  width: 100%;
  background:var(--color-background-input) ;
  box-shadow: 0px 10px 5px var( --color-shadow) ;
}
//rgb(185, 239, 248)

.v-app__line{
  width: 100%;
  height: 1px;
  background:var(--color-shadow) ;
  
}
.v-app__paragraph{
  margin: 0;
  padding: 10px;
  font-size: 3.5rem;
  text-align: center;
}
.v-app__ul{ 
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

 
}
.v-app__li{
  width: 100%;
  list-style: none;  
  text-align: center;
  justify-content: center;
  align-items: center;
}
a{
  font-size: 30px;
  color: black;
  text-decoration: none;
}
.v-app__li:hover{
  background: var(--color-background-button);
}


</style>
