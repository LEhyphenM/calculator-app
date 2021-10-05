<template>
  <div id="header">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        header: "Calculator App",
      }
    },
  }
</script>

<style scoped>
  #header h1 {
    border-bottom:1px solid #ddd;
    padding-bottom:10px;
    display:inline-block;
  }
</style>