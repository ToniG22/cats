<template>
  <div id="menu">
    <div id="menu-items">
      <RouterLink
        class="menu-item"
        v-for="(link, index) in linksData"
        :to="link.path"
        :key="index"
        @mouseover="checkDataset(index)"
        >{{ link.name }}</RouterLink
      >
    </div>
    <div id="menu-background-pattern"></div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuView',
  data() {
    return {
      menu: null
    }
  },
  props: {
    linksData: Array
  },
  components: {
    RouterLink
  },
  mounted() {
    this.menu = document.getElementById('menu')
    console.log(this.menu.dataset)
  },
  methods: {
    checkDataset: function (index) {
      this.menu.dataset.activeIndex = index
      console.log(this.menu.dataset)
    }
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
  transition: opacity 400ms ease;
}

#menu-items {
  margin-left: clamp(4rem, 20vw, 48rem);
  position: relative;
  z-index: 2;
}

#menu-items:hover > .menu-item {
  opacity: 0.3;
}

#menu-items:hover > .menu-item:hover {
  opacity: 1;
}

#menu-background-pattern {
  height: 100vh;
  width: 100vw;

  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 10%, transparent 10%);

  background-position: 0% 0%;
  background-size: 12vmin 12vmin;

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;

  transition: opacity 800ms, background-size 800ms;
}

/* It's not working still */
#menu-items:hover ~ #menu-background-pattern {
  background-size: 11vmin 11vmin;
  opacity: 0.5;
}

#menu[data-active-index='0'] > #menu-background-pattern {
  background-position: 0% - 33%;
}

#menu[data-active-index='1'] > #menu-background-pattern {
  background-position: 34% - 66%;
}

#menu[data-active-index='2'] > #menu-background-pattern {
  background-position: 67% - 100%;
}
</style>
