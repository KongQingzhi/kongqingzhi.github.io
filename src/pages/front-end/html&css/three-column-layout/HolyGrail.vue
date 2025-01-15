<template>
  <header class="header">header</header>
  <main class="container">
    <div class="center">center</div>
    <div class="left">left</div>
    <div class="right">right</div>
  </main>
  <footer class="footer">footer</footer>
</template>

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

.container {
  padding-left: 200px;
  padding-right: 100px;
}

.left {
  float: left;
  position: relative;
  left: -200px;
  width: 200px;
  margin-left: -100%;
  background-color: skyblue;
}

.center {
  float: left;
  width: 100%;
  background-color: deeppink;
}

.right {
  float: left;
  margin-right: -100px;
  width: 100px;
  background-color: orangered;
}

.footer {
  clear: both;
  background-color: darkorange;
}
</style>
