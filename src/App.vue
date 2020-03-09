<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
/* FontFamily import */
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
$quicksand: "Quicksand", sans-serif;
$black: #071619;
$grey: #eeeeee;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: $quicksand;
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
}
</style>