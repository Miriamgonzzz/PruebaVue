<template>
    <div class="v-content">
        <CInput v-model="name" type="text" placeholder="Usuario"/>
        <CInput v-model="password" type="password" placeholder="Password"/>
        <p>Hola: {{name}}</p>
        <p v-if="showError">{{ mensajeError }}</p>
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
            mensajeError:'Debe proporcionar un nombre y una contraseña',
        }
    },
    watch:{
         name(val){
            if(!val){
                this.mensajeError = 'Debe proporcionar un nombre y una contraseña'
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
                this.mensajeError =  'Debe proporcionar un nombre y una contraseña'
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
    
</style>
