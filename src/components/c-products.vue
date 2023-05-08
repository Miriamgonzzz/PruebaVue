<template>
    <div class="c-product">
        <img class="c-product__img" :src="product.image_url" :title="product.animeTitle" :alt="alt" @mouseover="mostrarSpam= true" @mouseleave="mostrarSpam=false">
        <span v-if="mostrarSpam" class="c-product__paragraph">{{ product.title}}</span>
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

}

.c-product__img:hover{
    //opacity: 0.3;
    border-radius:50%;
    box-shadow: 0px 0px 15px 15px var(--color-shadow);
    transform: rotate(360deg);
}
.c-product__paragraph{
    padding: 5px;
    font-size: 20px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style> 


 