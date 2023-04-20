<template>
    <div class="v-content">
        <CInput type="text" placeholder="Usuario"/>
        <CInput type="password" placeholder="Password"/>
        <CButton mensaje="Enviar" :ruta="ruta"></CButton>
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
