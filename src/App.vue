<template>
    <div id="app">
      <myheader/>
      <section style="display:flex;flex:1;">
          <myleft/>
        <article style="background-color:yellow;"></article>
      </section>
    </div>
</template>

<script>
import {myheader,myleft} from './components'
export default {
    name: 'app',
    components: {
        myheader,
        myleft
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    /* margin-top: 60px; */
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
