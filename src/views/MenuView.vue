<template>
  <div id="menu">
    <div id="menu-items">
      <RouterLink
        class="menu-item"
        v-for="(link, index) in linksData"
        :to="link.path"
        :key="index"
        @mouseover="setDataset(index)"
        >{{ link.name }}</RouterLink
      >
    </div>
    <div id="menu-background-pattern"></div>
    <div id="menu-background-image"></div>
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
  },
  methods: {
    checkDataset: function (index) {
      this.menu.dataset.activeIndex = index
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

  transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
}

#menu-background-image {
  height: 100%;
  width: 100%;

  background-image: url(https://images.unsplash.com/photo-1531214547534-50935aeb3448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8);

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 0;

  background-position: center 50%;
  background-size: 110vmax;
  opacity: 0.25;

  transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
}

#menu-items:hover ~ #menu-background-pattern {
  background-size: 11vmin 11vmin;
  opacity: 0.5;
}

#menu-items:hover ~ #menu-background-image {
  background-size: 100vmax;
  opacity: 0.1;
}

#menu[data-active-index='0'] > #menu-background-pattern {
  background-position: 0% -33%;
}

#menu[data-active-index='1'] > #menu-background-pattern {
  background-position: 0% -66%;
}

#menu[data-active-index='2'] > #menu-background-pattern {
  background-position: 0% -100%;
}

#menu[data-active-index='0'] > #menu-background-image {
  background-position: center 30%;
}

#menu[data-active-index='1'] > #menu-background-image {
  background-position: center 60%;
}

#menu[data-active-index='2'] > #menu-background-image {
  background-position: center 90%;
}
</style>
