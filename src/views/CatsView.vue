<template>
  <div class="cats">
    <img v-for="cat in fetchedData" :src="cat.url" />
  </div>
  <button @click="$emit('anotherCatEvent')">CLICK ME!</button>
</template>

<script>
export default {
  name: 'CatsView',
  emits: ['anotherCatEvent'],
  props: {
    fetchedData: Array
  }
}
</script>

<style scoped>
.cats {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
}

img {
  width: 350px;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
}
</style>
