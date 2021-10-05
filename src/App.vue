<template>
  <div id="app">
    <Header />
    <Calculator />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Calculator from "./components/Calculator.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return;
  },
  components: {
    Header,
    Calculator,
    Footer
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

/* X-Small devices (portrait phones, less than 576px) */
  @media (max-width: 575.98px) {
    #app {
      margin-top:40px;
    }
  }
</style>