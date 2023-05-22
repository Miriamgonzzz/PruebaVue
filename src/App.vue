<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '@/assets/styles/style.scss'
</script>

<template>
  <header class="v-app__header" v-if="$route.path !== '/'">
    <p class="v-app__paragraph">
      AnimeFun
      <img class="v-app__img" src="src/assets/salida.png" alt="salir" @click="doLogout()" />
    </p>
    <div class="v-app__line"></div>
    <nav class="v-app__navbar">
      <ul class="v-app__ul">
        <li class="v-app__li" :style="start"><a href="/start" class="v_app__router">Inicio</a></li>
        <li class="v-app__li" :style="lista"><a href="/lista" class="v_app__router">Animes</a></li>
        <li class="v-app__li" :style="form">
          <a href="/form" class="v_app__router">Formulario</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script>
import { userStore } from '@/stores/user'
export default {
  data() {
    return {}
  },
  computed: {
    start() {
      if (this.$route.path === '/start') {
        return 'background-color: rgba(144, 124, 144,56);'
      }
    },
    lista() {
      if (this.$route.path === '/lista') {
        return 'background-color: rgba(144, 124, 144,56);'
      }
    },
    form() {
      if (this.$route.path === '/form') {
        return 'background-color: rgba(144, 124, 144,56);'
      }
    }
  },
  methods: {
    doLogout() {
      const useUserStore = userStore()
      useUserStore.logout()
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app__header {
  margin: 0;
  width: 100%;
  background: var(--color-background-showForm);
  box-shadow: 0px 10px 5px var(--color-shadow);
}
//rgb(185, 239, 248)

.v-app__line {
  width: 100%;
  height: 1px;
  background: var(--color-shadow);
}
.v-app__paragraph {
  margin: 0;
  padding: 10px;
  font-size: 3.5rem;
  text-align: center;
}
.v-app__ul {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  //gap: 20px;
  align-items: center;
}
.v-app__li {
  width: 100%;
  height: 100%;
  list-style: none;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.v-app__img {
  width: 5%;
}
.v_app__router {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: black;
  text-decoration: none;
}
.v-app__li:hover {
  background: var(--color-background-button);
}
</style>
