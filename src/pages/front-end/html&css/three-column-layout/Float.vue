<template>
  <header class="header">header</header>
  <main class="container">
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="center">center</div>
  </main>
  <footer class="footer">footer</footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'FloatComponent' });
</script>

<style scoped>
.header,
.left,
.center,
.right,
.footer {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
}

.header {
  background-color: green;
}

.left {
  float: left;
  width: 200px;
  background-color: skyblue;
}

.center {
  margin-left: 200px;
  margin-right: 100px;
  background-color: deeppink;
}

.right {
  float: right;
  width: 100px;
  background-color: orangered;
}

.footer {
  clear: both;
  background-color: darkorange;
}
</style>
