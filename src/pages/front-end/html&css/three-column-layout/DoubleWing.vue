<template>
  <header class="header">header</header>
  <main class="container">
    <div class="center">center</div>
  </main>
  <div class="left">left</div>
  <div class="right">right</div>
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
  float: left;
  width: 100%;
  overflow: hidden;

}

.left {
  float: left;
  margin-left: -100%;
  width: 200px;
  background-color: skyblue;
}

.center {
  margin-left: 200px;
  margin-right: 100px;
  background-color: deeppink;
}

.right {
  float: left;
  margin-left: -100px;
  width: 100px;
  background-color: orangered;
}

.footer {
  clear: both;
  background-color: darkorange;
}
</style>
