<template>
  <l-showForm>
    <template #title>
      <CParagraph text="Mostrar"></CParagraph>
    </template>
    <template #content>
      <CElements :src="product"></CElements>
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
  }
}
</script>
