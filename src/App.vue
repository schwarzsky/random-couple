<script>
export default {
  name: 'App',
}
</script>
<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
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

router-view {
  width: 100%;
  height: 100%;
}
</style>
