<template>
    <div class="cats">
        <button>Click</button>
        <img v-for="cat in fetchedData" :src="cat.url">
        <h1>This is an cats page</h1>
    </div>
</template>

<script>
    export default {
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
    border-radius: .5rem;
}
</style>