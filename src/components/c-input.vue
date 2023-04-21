
import { text } from 'stream/consumers';

<template>
    <input 
    :type="type" 
    :placeholder="placeholder" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"    
    >
  
</template>

<script>

export default {
    inheritAttrs:false,
    props:{
       type:String,
        modelValue:String,
       placeholder:{
        type:String,
        default:"Por defecto"
       },
  
       
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



</style>
