<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LiquroTreeWrapper></LiquroTreeWrapper> -->
    <LiquroTree></LiquroTree>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LiquroTreeWrapper from './components/LiquroTreeWrapper.vue'
import LiquroTree from './components/LiquroTree.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LiquroTreeWrapper,
    // LiquorTree,
    LiquroTree
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
