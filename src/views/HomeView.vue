<template>
  <l-home>
    <template #title>
      <h1 class="c-title">Login</h1>
    </template>
    <template #form>
      <CInput v-model="username" type="text" placeholder="Usuario" />
      <CInput v-model="password" type="password" placeholder="Password" />
    </template>
    <template #paragraph>
      <p class="c-paragraph"><strong>Hola:</strong> {{ username }}</p>
      <p class="c-paragraph c-paragraph__error" v-if="showError">{{ mensajeError }}</p>
    </template>
    <template #button>
      <CButton mensaje="Enviar" @click="doLogin" :disabled="botonDeshabilitado"></CButton>
    </template>
  </l-home>
</template>

<script>
import LHome from '../layouts/l-home.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'
//import {mapActions} from 'pinia'
export default {
  components: {
    LHome,
    CInput,
    CButton
  },
  data() {
    return {
      username: '',
      password: '',
      showError: true,
      mensajeError: 'Debes proporcionar un nombre y una contraseña'
    }
  },
  watch: {
    username(val) {
      this.mensajeError = ' '
      this.showError = false
      if (!val) {
        this.mensajeError = 'Debes proporcionar un nombre y una contraseña'
        this.showError = true
      }
      if (!this.password) {
        this.mensajeError = 'El campo de password es obligatorio'
        this.showError = true
      }
    },
    password(val) {
      this.mensajeError = ''
      this.showError = false
      if (!val) {
        this.mensajeError = 'Debes proporcionar un nombre y una contraseña'
        this.showError = true
      }
      if (!this.username) {
        this.mensajeError = 'El campo de nombre es obligatorio'
        this.showError = true
      }
    }
  },
  computed: {
    botonDeshabilitado() {
      return !this.username || !this.password
    }
  },
  methods: {
    //...mapActions(userStore, ['login']),

    async doLogin() {
      const { username, password } = this

      const doLogin = await userStore().login({ username, password })

      if (doLogin) {
        this.$router.push({ name: 'lista' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-title {
  margin: -1px 0px 10px 1px;
  padding: 5%;
  width: 100%;
  text-align: center;
  border-radius: 20px 20px 0 0;
  background: black;
  color: white;
  box-shadow: 0px 8px 5px var(--color-shadow);
}
.c-paragraph {
  margin: 2%;
  font-size: 20px;
}
.c-paragraph__error {
  color: red;
}
</style>
