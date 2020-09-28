<template>
  <nav class="header-div">
    <div class="menu-icon-group">
      <div @click="showhide" title="Double click to show/hide sidebar" class="menu">
        <FontAwesomeIcon :icon="faBars" />
      </div>
      <div onclick="homeHandler" class="icon">
        <FontAwesomeIcon :icon="faYoutube" />
      </div>
    </div>
    <div class="search-bar">
      <input type="search" placeholder="Search" />
      <button type="button"><FontAwesomeIcon :icon="faSearch" /></button>
    </div>
    <div class="other-options">
      <span class="upload-video" title="Upload Video"><FontAwesomeIcon :icon="faUpload" /></span>
      <span class="sign-in" title="Login Here"><FontAwesomeIcon :icon="faSignInAlt" /></span>
      <span class="sign-up" title="Logout Here"><FontAwesomeIcon :icon="faSignOutAlt" /></span>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faSearch, faUpload, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      shown: false,
      faBars: faBars, faSearch: faSearch, faYoutube: faYoutube, faSearch: faSearch,
      faUpload: faUpload, faSignInAlt: faSignInAlt, faSignOutAlt: faSignOutAlt
    }
  },
  methods: {
    showhide() {
      shown = !shown
    },
    homeHandler() {}
  }
}
</script>

<style lang="scss" scoped>
.header-div {
  // position: fixed;
  z-index: 10;  // Redundant code. Find out why
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // height: 3.5rem;
  height: 100%;
  background-color: #F5F6F7;
  border-bottom: 1px solid #DADDE1;
  box-sizing: border-box;

  .menu-icon-group {
    display: flex;
    justify-content: space-between;
    // align-items: center;

    .menu {
      margin: 0 1.5rem;
      cursor: pointer;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .icon {
      cursor: pointer;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  .search-bar {
    display: flex;
    // align-items: center;

    input[type="search"] {
      // width: 10rem;
      width: 25rem;
      height: 2.2rem;
      padding: 0 0.5rem;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid #BEC3C9;
      outline: none;
    }

    button {
      height: 2.2rem;
      width: 4.4rem;
      background-color: #fff;
      color: #8D949E;
      border: 1px solid #BEC3C9;
      cursor: pointer;
      outline: none;
    }
  }

  .other-options {
    margin-right: 2rem;

    span {
      margin: 0 1rem;
      cursor: pointer;

      svg {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
}
</style>