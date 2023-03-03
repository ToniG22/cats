<template>
  <CatsView :fetchedData="fetchedCats" @anotherCatEvent="getNewCat"></CatsView>
</template>

<script>
import CatsView from '../views/CatsView.vue'
const catsUrl = 'https://api.thecatapi.com/v1/images/search?size=full'
const apiKey = 'live_tAan3X2z0vxtNNgb5bsXo0D2B14n9HkCgdFk8X8MGUrPKInUUImYgCfEwxJlAQPr'

export default {
  name: 'CatsContainer',
  data() {
    return {
      fetchedCats: []
    }
  },
  components: {
    CatsView
  },
  async created() {
    //Get cat images from cats API
    this.fetchedCats = await fetch(
      catsUrl,
      { headers: { 'x-api-key': apiKey } },
      { mode: 'no-cors' }
    ).then((r) => r.json())
  },
  methods: {
    getNewCat: async function () {
      //Get cat images from cats API
      this.fetchedCats = await fetch(
        catsUrl,
        { headers: { 'x-api-key': apiKey } },
        { mode: 'no-cors' }
      ).then((r) => r.json())
    }
  }
}
</script>
