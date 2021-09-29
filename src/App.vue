<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <Calculator />
    <h6> {{ footer }} </h6>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
export default {
  name: 'app',
  data() {
    return {
      title: "Calculator App",
      footer: "Lauren Elliott-Manheim • 2015-2022 • Ex astris, scientia"
    }
  },
  components: {
    Calculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom:1px solid #ddd;
  padding-bottom:10px;
  display:inline-block;
}

h6 {
  font-weight:400;
  letter-spacing:2.25px;
  text-transform:uppercase;
  padding:16px;
}

</style>