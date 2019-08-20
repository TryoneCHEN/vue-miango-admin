<template>
    <div id="app">
      <myheader />
      <section>
        <nav></nav>
      </section>
    </div>
</template>

<script>
import myheader from './components/header'
export default {
    name: 'app',
    components: {
        myheader
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
}
</style>
