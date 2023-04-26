<template>
    <l-list>
       <template #title>
         <CParagraph text="Estamos en lista"></CParagraph>
        </template>
        <template #list>
            <CImg v-for="product in products" :key="product.animeId" :alt="imagen" :product="product"></CImg>
        </template>
    </l-list>
</template>

<script>
import LList from '../layouts/l-list.vue'
import CParagraph from '../components/c-paragraph.vue'
import CImg from '../components/c-product.vue'
import {productsStore} from '../stores/products'
    export default {
        components:{
            LList,
            CParagraph,
            CImg
           
        },
        data() {
            return {
                products: []
            }
        },
        computed:{
            changeParagraph(){


            }
        },
        methods: {
        async getAllProducts() {
            try {
                const useProductStore = productsStore()
                this.products = await useProductStore.fetchProducts()
                console.log(this.products)
                this.fetched = true
            } catch (e) {
                this.error = true
            }
        }
    },
    created(){
        console.log(this.getAllProducts)
        this.getAllProducts()
    }
}

</script>

<style lang="scss">
// #list{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     //gap: 20px;
//     border: 5px solid red;
// }



</style>