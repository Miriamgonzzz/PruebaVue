<template>
    <l-show>
        <template #title>
            <CParagraph text="Mostrar"></CParagraph>
        </template>
        <template #list>
            <CElements :products="products"></CElements>
        </template>
    </l-show>
    <!-- v-for="product in products" :key="product.mal_id" -->
</template>


<script>
import LShow from '../layouts/l-show.vue'
import CParagraph from '../components/c-paragraph.vue'
import CElements from '../components/c-elements.vue'
import {productsStore} from '../stores/products'

    export default {
        components: {LShow,CParagraph,CElements},
        data() {
            return {
                products:[],
            }
        },
        created(){
            
            const id = this.$route.params.id;
            console.log(id)
            const useProductStore = productsStore()
            const selectedProducts = useProductStore.products.find(products => products.mal_id == id)
            if(selectedProducts ===null ||selectedProducts===""){
                this.$router.push({name: 'lista'})
            }
            this.products = selectedProducts;
            console.log(selectedProducts)
            console.log(this.products)

            
          
        }
    }

</script>