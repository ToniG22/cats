<template>
  <div class="topbar">
    <nav>
      <RouterLink class="routerLink" v-for="route in routesData" :to="route.path" :key="route.name">
        {{ route.name }}
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'TopBarView',
  props: {
    routesData: Array
  },
  components: RouterLink
}
</script>

<style scoped>
.topbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  height: 40px;
  background-color: white;
  align-content: center;
  text-align: right;
}

.routerLink {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
}

a:hover {
  background-color: sandybrown;
}
</style>
