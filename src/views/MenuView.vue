<template>
  <div id="menu">
    <div id="menu-items">
      <RouterLink class="menu-item" v-for="link in linksData" :to="link.path" :key="link.name">{{
        link.name
      }}</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuView',
  props: {
    linksData: Array
  },
  components: {
    RouterLink
  }
}
</script>

<style scoped>
#menu {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.menu-item {
  color: white;
  font-size: clamp(3rem, 8vw, 8rem);
  font-family: 'Roboto', serif;

  display: block;
  text-decoration: none;
  padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
}

#menu-items {
  margin-left: clamp(4rem, 20vw, 48rem);
}
</style>
