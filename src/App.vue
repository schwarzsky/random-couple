<script>
import Episode from './components/Episode'
export default {
  name: 'App',
  components: {
    Episode
  },
  data(){
    return {
      generated: 0,
      episodes: {
        1: 22,
        2: 22,
        3: 20,
        4: 24,
        5: 24,
        6: 24,
        7: 24,
        8: 24,
        9: 24
      },
      tmdb: '850b9b287e72a3bf8ac3311272737adf',
      data: '',
      image: '',
      trakt: 'd714423c83cfc1cea2272da1144bd2f7da3886fe29159bd57b4d808cb5993ad8',
      mins: ''
    }
  },
  methods: {
    generate(){
      let season = Math.floor((Math.random() * 9) + 1);
      let episode = Math.floor(Math.random() * this.episodes[season]);

      console.log(`S${season}E${episode}`)

      this.axios.get(`https://api.themoviedb.org/3/tv/1100/season/${season}/episode/${episode}?api_key=${this.tmdb}`).then((response) => {
        this.data = response.data;
        this.data.episode = `S${season}E${episode}`;
        console.log(this.data.vote_average);
      })

      this.axios.get(`https://api.themoviedb.org/3/tv/1100/season/${season}/episode/${episode}/images?api_key=${this.tmdb}`).then((response) => {
        console.log(response.data);

        this.image = 'https://image.tmdb.org/t/p/original/' + response.data.stills[0].file_path;
      })

      let config = {
        headers: {
          'Content-Type' : 'application/json',
          'trakt-api-version' : '2',
          'trakt-api-key' : this.trakt
        }
      }

      this.axios.get(`https://api.trakt.tv/shows/how-i-met-your-mother/seasons/${season}/episodes/${episode}?extended=full`, config).then((response) => {
        this.mins = response.data.runtime;

        this.generated = 1;
      })
    }
  },
  mounted(){
    console.log(Math.floor(Math.random() * 10));
  }
}
</script>
<template>
  <div id="app">
    <div class="container">
      <vue-headful
        title="Random Couple | Legen... Wait for it... Dary!"
        description="Random Couple is a random episode generator for the acclaimed TV show How I Met Your Mother."
      />
      <section class="content">
        <section class="box">
          <h1>RANDOM-COUPLE</h1>
          <p>Random Couple is a random episode generator for the acclaimed TV show How I Met Your Mother.</p>
          <button v-on:click="generate">GENERATE EPISODE</button>
        </section>
        <section class="box">
          <Episode v-if="this.generated == true" :data="this.data" :runtime="this.mins" :image="this.image" />
        </section>
        <section class="box">
          <p class="sign">&lt;/3&gt; schwarzsky, open source at <a href="https://github.com/schwarzsky/random-couple" target="_blank">github.</a> Made with TMDb APIs. Feel free to improve on <a href="https://github.com/schwarzsky/random-couple" target="_blank">GitHub</a>. Inspired from <a href="https://randommifflin.com/" target="_blank">Random Mifflin.</p>
        </section>
      </section>
    </div>
  </div>
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
}

.sign {
  color: #5e5e5e;
}

button {
  border: 0px;
  background: #fcba03;
  color: white;
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-size: 19px;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 100%;
  cursor: pointer;
  outline: none !important;
}

button:hover {
  background: #e0a500;
}

.box {
  margin-top: 2vh;
  margin-bottom: 2vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f1f1f;
  color: white;
}

.container {
  width: 40%;
  height: 100vh;
  background: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container h1 {
  font-size: 36px;
}

.content {
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 1200px) and (min-width: 0px) {
  .container {
    width: 90% !important;
  }
}

</style>
