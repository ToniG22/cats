<template>
  <div>
    <TopBarView :routesData="routes"></TopBarView>
  </div>
</template>

<script>
import TopBarView from '../views/TopBarView.vue'

export default {
  name: 'TopBarContainer',
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>
