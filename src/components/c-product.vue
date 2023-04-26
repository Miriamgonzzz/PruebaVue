<template>
    <div class="c-product">
        <img class="c-product__img" :src="product.animeImg" :alt="alt">
        <span class="c-product__paragraph">{{ product.animeTitle }}</span>
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
    }
}
</script>

<style lang="scss" scoped>

.c-product{
    // margin: 10px;
    //width: 30%;
    text-align: center;
   display: inline-block;
    border: 1px solid blue;
   
    
}
.c-product__img{
    //margin: 20px;
    width:100%;
    height:100%;
     object-fit:cover;
    border:1px solid green;


}

.c-product__paragraph{
    font-size: 1.5rem;
    color: green;
}

</style> 


 