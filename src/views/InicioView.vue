<template>
    <div class="v-content">
        <CInput v-model="name" type="text" placeholder="Usuario"/>
        <CInput v-model="password" type="password" placeholder="Password"/>
        <p>Hola: {{name}}</p>
        <p v-if="mensajeError">{{ mensajeError }}</p>
        <CButton mensaje="Enviar" @click="check" :disabled="botonDeshabilitado"></CButton>
    </div>
</template>
  

<script >
import CInput from '../components/c-input.vue';
import CButton from '../components/c-button.vue';
export default{
    components:{
        CInput,
        CButton
    },
    data(){
        return{
            name:'',
            password:'',
            mensajeError:''
        }
    },
    watch:{
         name(val){
            if(!val){
                this.mensajeError = 'El campo de nombre es obligatorio'
            }else{
                this.mensajeError = '';
            }
        },
        password(val){
            if(!val){
                this.mensajeError = 'El campo de password es obligatorio'
            }else{
                this.mensajeError = '';
            }
        }
      

    },
    computed:{
        botonDeshabilitado(){
            return !this.name || !this.password;
        }

    },
    methods:{

        check(){
            if(this.name === 'Pepe' && this.password==="12345"){
                alert('Son correcta');

            }else{
                alert('No son correctas');
            }
        }

       
    }

}
</script>

<style lang="scss" scoped>
    .v-content{

        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--c-black);
        background: var(--c-white);
        border-radius:20px ;
       
    }
    
</style>
