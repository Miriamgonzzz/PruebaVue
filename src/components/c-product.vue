<template>
    <div class="c-product">
        <img class="c-product__img" :src="product.animeImg" :title="product.animeTitle" :alt="alt" @mouseover="mostrarSpam= true" @mouseleave="mostrarSpam=false" @click="mostrar">
        <span v-if="mostrarSpam" class="c-product__paragraph">{{ product.animeTitle }}</span>
    </div>
</template>

<script>

export default{
    name: 'CImg',
    props:{
        src:String,
        alt:String,
        product:{
            type:Object,
            required:true
        }
    },
   data(){
    return{
        mostrarSpam:false
    }
   },
}
</script>

<style lang="scss" scoped>

.c-product{
    text-align: center;
   display: inline-block;
    position: relative;
    
}
.c-product__img{
    width:100%;
    height:100%;
     object-fit:cover;
    border:1px solid green;


}

.c-product__img:hover{
    opacity: 0.3;
}
.c-product__paragraph{
    padding: 5px;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style> 


 