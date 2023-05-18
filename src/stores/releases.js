import { defineStore } from 'pinia'
import { apiStore } from './api'

export const releasesStore = defineStore('releases', {
  state: () => ({
    releases: []
  }),
  actions: {
    async fetchReleases() {
      const method = 'GET'
      const url = '/newReleases/getAll'

      return apiStore()
        .doRequest({ url, method })
        .then((res) => {
          this.releases = res
          return res
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    }
  }
})
