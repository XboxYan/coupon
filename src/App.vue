<template>
  <Header/>
  <Main/>
</template>

<script setup>
import Header from './components/header.vue'
import Main from './components/main.vue'
</script>

<style>
body{
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
a {
  color: #42b983;
}
.main{
  width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
}
.card-con{
  flex: 1;
}
.side{
  flex: 1;
  text-align: left;
  align-self: flex-start;
}
.card{
  width: 400px;
  height: 300px;
  margin: auto;
  background: linear-gradient(45deg, orange, red);
}
</style>
