<template>
    <div class="v-content">
        <CInput v-model="usuario" type="text" placeholder="Usuario"/>
        <CInput type="password" placeholder="Password"/>
        <p>Hola: {{ usuario }}</p>
        <CButton mensaje="Enviar" ></CButton>
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
            usuario:''
        }
    },
    watch:{
        usuario(value){
            this.usuario=value;
        }

    },
    computed:{

    },
    methods:{
       
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
