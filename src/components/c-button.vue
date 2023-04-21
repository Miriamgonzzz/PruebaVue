<template>
    <button class="c-button">{{ mensaje }}</button>
</template>

<script>

export default{
    props:{
        mensaje:String,
    },
 
}
</script>

<style lang="scss" scoped>

.c-button{

    margin: 1%;
    width: 40%;
    height: 40px;
    font-size: 20px;
    background-color: var(--color-background-button);
    border-color: var(--color-border);
    border-radius: 5px;
    transition-duration: 500ms;
}
.c-button:hover{
   transform: scale(1.2);
}

</style>