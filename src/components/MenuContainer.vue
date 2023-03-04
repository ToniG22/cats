<template>
  <MenuView :linksData="links"></MenuView>
</template>

<script>
import MenuView from '../views/MenuView.vue'

export default {
  name: 'MenuContainer',
  data() {
    return {
      links: []
    }
  },
  components: { MenuView },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.links.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>
