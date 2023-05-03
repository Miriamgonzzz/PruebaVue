<template>
    <span class="c-element__title">{{ products.title }}</span>
    <img class="c-element__img" :src="products.image_url" alt="Imagen">
    <span class="c-element__type">{{ products.type }}</span>
    <span class="c-element__episodes">{{ products.episodes }}</span>
    <span class="c-element__status">{{ products.status }}</span>
    <span class="c-element__score">{{ products.score }}</span>
    <span class="c-element__theme">{{ products.Themes }}</span>
    <span class="c-element__url">{{ products.url}}</span>
    <span class="c-element__synopsis">{{ products.synopsis }}</span>
    <a class="c-element__youtube" :href="products.youtube">Trailer YouTube</a>
    <!-- <iframe class="c-element__yputube" width="560" height="315" :src="products.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     -->
</template>

<script>
    export default {
        props:{
            products:{
                type:Array,
                required:true
            }
        },
                    
                      
    }


</script>

<style lang="scss" scoped>

  .c-element__title{ 
    grid-column: 1/3;
    grid-row: 1;
    text-align: center;
    font-size: 40px;
  }
  .c-element__img{
    width:100%;
    height:100%;
    object-fit:cover;
    grid-column: 1/2;
    grid-row: 2/8;
  }
  .c-element__type{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 2;
    font-size: 40px;
  }
  .c-element__episodes{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 3;
    font-size: 40px;
  }
  .c-element__status{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 4;
    font-size: 40px;
  }
  .c-element__score{

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 5;
    font-size: 40px;
  }
  .c-element__theme{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 6;
    font-size: 40px;
  }
  .c-element__url{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 2;
    grid-row: 7;
    font-size: 40px;
  }
  .c-element__synopsis{

    //display:flex;
    //flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 1/3;
    grid-row: 8;
    font-size: 20px;
  }
 .c-element__youtube{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: 1/3;
    grid-row: 9;
    font-size: 40px;
  }



</style>