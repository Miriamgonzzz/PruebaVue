<template>
  <l-list>
    <template #title>
      <CParagraph text="Lista de animes"></CParagraph>
    </template>
    <template v-if="fetched" #list>
      <CProducts
        v-for="product in products"
        :key="product.mal_id"
        alt="imagen"
        :product="product"
        @click="mostrar(product.mal_id)"
      ></CProducts>
    </template>
  </l-list>
</template>

<script>
import LList from '../layouts/l-list.vue'
import CParagraph from '../components/c-paragraph.vue'
import CProducts from '../components/c-products.vue'
import { productsStore } from '../stores/products'
export default {
  components: {
    LList,
    CParagraph,
    CProducts
  },
  data() {
    return {
      products: [],
      fetched: false
    }
  },
  methods: {
    mostrar(id) {
      this.$router.push({ name: 'show', params: { id } })
    },

    async getAllProducts() {
      try {
        const useProductStore = productsStore()
        this.products = await useProductStore.fetchProducts()
        this.fetched = true
      } catch (e) {
        this.error = true
      }
    }
  },
  created() {
    this.getAllProducts()
  }
}
</script>

<style lang="scss"></style>
