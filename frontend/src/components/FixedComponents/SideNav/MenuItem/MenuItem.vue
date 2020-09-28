<template>
  <router-link :to="navto" class="menu-item">
    <span><FontAwesomeIcon :icon="faicon" /></span>
    <span>{{ title }}</span>
  </router-link>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: ['faicon', 'title', 'navto']
}
</script>

<style lang="scss" scoped>
.menu-item {
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  text-decoration: none;
  // border-bottom: 1px solid #a8a8a8;

  &:hover {
    background-color: #DADDE1;
  }

  span {
    margin: 0 0.7rem;
    color: #444950;
    overflow: hidden;

    svg {
      // The svg width and height was overwritten by me
      // color: #FA383E;

      &.svg-inline--fa {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
}

</style>