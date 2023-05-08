import { defineStore } from 'pinia'
import { apiStore } from './api'

export const productsStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  actions: {
    async fetchProducts() {
      const method = 'GET'
      const url = '/products/getAll'

      return apiStore()
        .doRequest({ url, method })
        .then((res) => {
          this.products = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },

    async getProductById(id) {
      if (this.products.length === 0) await this.fetchProducts()

      return this.products.find((product) => product.mal_id === id)
    },

    async getAllProducts() {
      if (this.products.length === 0) await this.fetchProducts()

      return this.products
    }
  }
})
