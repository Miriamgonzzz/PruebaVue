import { defineStore } from 'pinia'
import { apiStore } from './api'

export const productsStore = defineStore('products', {
   state: () => ({
      products: null
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
      }
   }
})
