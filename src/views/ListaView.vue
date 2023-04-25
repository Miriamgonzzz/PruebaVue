<template>
    <section>
         <h1>Estamos en lista</h1>
         <ul v-for="product in products" :key="product.type">
            <li>{{ product.balance }}</li>
            <li>{{ product.type }}</li>
            <li>{{ product.number }}</li>

         </ul>
    </section>
</template>

<script>
import {productsStore} from '../stores/products'
    export default {
        components:{

        },
        data() {
            return {
                products: []
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