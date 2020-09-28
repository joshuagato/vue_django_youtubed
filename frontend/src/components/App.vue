<template>
  <article>
    <Homepage />
  </article>
</template>

<script>
import Homepage from './Homepage/Homepage.vue';

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

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>