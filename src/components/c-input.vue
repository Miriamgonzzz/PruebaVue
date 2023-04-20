
import { text } from 'stream/consumers';

<template>
    <input :type="type" :placeholder="placeholder">
</template>

<script>

export default {
    inheritAttrs:false,
    props:{
       type:String,
       placeholder:{
        type:String,
        default:"Por defecto"
       }
       
    }
}
</script>

<style lang="scss" scoped>

input{
    margin: 1%;
    width: 50%;
    height: 40px;
    font-size: 20px;
    color: var(--c-white);
    background-color: var(--color-background-input);
    border-radius: 10px;
    border: 0ch;

}

input:focus{
    border:0;
}

</style>
