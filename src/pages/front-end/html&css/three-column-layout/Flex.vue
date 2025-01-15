<template>
  <header class="header">header</header>
  <main class="container">
    <div class="left">left</div>
    <div class="center">center</div>
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
  display: flex;
}

.left {
  width: 200px;
  background-color: skyblue;
}

.center {
  flex: 1;
  background-color: deeppink;
}

.right {
  width: 100px;
  background-color: orangered;
}

.footer {
  background-color: darkorange;
}
</style>
