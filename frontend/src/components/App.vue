<template>
  <article>
    <Homepage />
  </article>
</template>

<script>
import Homepage from './Homepage/Homepage';

export default {
  components: {
    Homepage
  },
  data() {
    return {
      greeting: "Hello world from",
      greeter: "Vue Js"
    };
  }
};
</script>

<style lang="scss">
*, body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100vh;
  width: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>