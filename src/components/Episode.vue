<script>
export default {
    name: 'Episode',
    props: ['data', 'runtime', 'image']
}
</script>
<template>
        <article>
            <img :src="image" alt="a episode" />
            <h2>{{this.data.name}}</h2>
            <section class="episode-info">
              <h3>📺 {{this.data.episode}}</h3>
              <h3>⏱ {{this.runtime}} mins.</h3>
              <h3>✨ {{this.data.vote_average}}/10</h3>
            </section>
            <p>{{this.data.overview}}</p>
        </article>
</template>
<style scoped>
article {
    margin-top: 1vh;
    margin-bottom: 1.5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

article h2 {
    margin-top: 2vh;
}

article section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5vh;
    margin-bottom: 1vh;
}

article img {
  width: 100%;
  height: auto;
}

article p {
    line-height: 1.25;
}
</style>