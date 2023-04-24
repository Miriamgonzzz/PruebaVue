<template>
    <l-inicio>
        <template #titulo>
            <h1 class="c-titulo">Login</h1>
        </template>
        <template #form>
            <CInput v-model="name" type="text" placeholder="Usuario"/>
            <CInput v-model="password" type="password" placeholder="Password"/>
        </template>
        <template #parrafo>
            <p class="c-parrafo"><strong>Hola:</strong> {{name}}</p>
            <p class="c-parrafo c-parrafo__error" v-if="showError">{{ mensajeError }}</p>
        </template>
        <template #button>
            <CButton mensaje="Enviar" @click="check" :disabled="botonDeshabilitado"></CButton>
        </template>
    </l-inicio>
</template>

<script >
import LInicio from '../layouts/l-inicio.vue'
import CInput from '../components/c-input.vue';
import CButton from '../components/c-button.vue';
export default{
    components:{
        LInicio,
        CInput,
        CButton,
       
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
            this.mensajeError = ' ';
            this.showError=false;
            if(!val){
                this.mensajeError = 'Debes proporcionar un nombre y una contraseña'
                this.showError=true;
            } 
            if (!this.password){
             this.mensajeError = 'El campo de password es obligatorio'
                this.showError=true;
            }
                
            
        },
        password(val){

            this.mensajeError = '';
            this.showError=false;
            if(!val){
                this.mensajeError =  'Debes proporcionar un nombre y una contraseña'
                this.showError=true;
            } 
            if (!this.name){
                this.mensajeError = 'El campo de nombre es obligatorio'
                this.showError=true;
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
    .c-parrafo__error{
        color:red;
    }
</style>
