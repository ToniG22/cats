<template>
  <div class="wraper">
    <div class="cats">
      <img v-for="cat in fetchedData" :src="cat.url" :key="cat.id" />
    </div>
    <div class="btn">
      <button class="catBtn" @click="$emit('anotherCatEvent')">CLICK ME!</button>
    </div>
  </div>
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
.wraper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.catBtn {
  background-color: sandybrown;
  height: 100px;
  width: 350px;
  border-radius: 0.5rem;
}

img {
  width: 350px;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
}
</style>
