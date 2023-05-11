<template>
  <l-showForm>
    <template #title>
      <CParagraph text="Mostrar"></CParagraph>
    </template>
    <template #content>
      <CElements :src="product"></CElements>
      <!-- <CElements :products="products"></CElements> -->
    </template>
  </l-showForm>
</template>

<script>
import LShowForm from '../layouts/l-showForm.vue'
import CParagraph from '../components/c-paragraph.vue'
import CElements from '../components/c-elements.vue'
import { productsStore } from '../stores/products'

export default {
  components: { LShowForm, CParagraph, CElements },
  data() {
    return {
      product: []
    }
  },
  async created() {
    const id = this.$route.params.id
    const useProductStore = productsStore()
    const selectedProduct = await useProductStore.getProductById(id)
    this.product = selectedProduct

    //     products: []
    //   }
    // },
    // created() {
    //   const id = this.$route.params.id
    //   console.log(id)
    //   const useProductStore = productsStore()
    //   const selectedProducts = useProductStore.products.find((products) => products.mal_id == id)
    //   this.products = selectedProducts
    //   console.log(selectedProducts)
    //   console.log(this.products)

    //   //window.history.pushState(null, null, `/lista`)
    //   //window.history.replaceState(null, null, `/lista`)
    //   //this.$router.go(-1)
  }
}
</script>
