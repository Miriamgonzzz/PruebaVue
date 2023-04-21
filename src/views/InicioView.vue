<template>
    <div class="v-content">
        <h1 class="c-titulo">Login</h1>
        <CInput v-model="name" type="text" placeholder="Usuario"/>
        <CInput v-model="password" type="password" placeholder="Password"/>
        <p class="c-parrafo"><strong>Hola:</strong> {{name}}</p>
        <p class="c-parrafo c-error" v-if="showError">{{ mensajeError }}</p>
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
            showError:true,
            mensajeError:'Debes proporcionar un nombre y una contraseña',
        }
    },
    watch:{
         name(val){
            if(!val){
                this.mensajeError = 'Debes proporcionar un nombre y una contraseña'
                this.showError=true;
            }else if (!this.password){
             this.mensajeError = 'El campo de password es obligatorio'
                this.showError=true;
            }else{
                this.mensajeError = ' ';
                this.showError=false;
            }
        },
        password(val){
            if(!val){
                this.mensajeError =  'Debes proporcionar un nombre y una contraseña'
                this.showError=true;
            }else if (!this.name){
                this.mensajeError = 'El campo de nombre es obligatorio'
                this.showError=true;
            }else{
                this.mensajeError = '';
                this.showError=false;
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
    .c-titulo{
     
       margin: -1px 0px 10px 1px;
        padding: 5%;
        width: 100%;
        text-align: center;
        border-radius: 20px 20px 0 0;
        background: black;
        color: white;
        box-shadow: 0px 8px 5px var(--color-shadow);
    }
    .c-parrafo{
        margin: 2% ;
        font-size: 20px;
    }
    .c-error{
        color:red;
    }
</style>
