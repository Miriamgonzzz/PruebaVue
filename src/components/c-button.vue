<template>
    <button>{{ mensaje }}</button>
</template>

<script>

export default{
    props:{
        mensaje:String,
    },
 
}
</script>

<style lang="scss" scoped>

button{

    margin: 1%;
    width: 40%;
    height: 20%;
    font-size: 20px;
    background-color: var(--color-background-button);
    border-color: var(--color-border);
    border-radius: 5px;
}

</style>