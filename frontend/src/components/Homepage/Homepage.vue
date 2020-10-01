<template>
  <div class="homepage">
    <section class="header-section">
      <Header />
    </section>

    <section class="main-content-and-nav-div">
      <section v-if="shown" class="side-nav">
        <SideNav />
      </section>

      <section class="main-content">
        <ListVideos />
        <!-- <Route path='/watch-videos' exact component={WatchVideos} /> -->
      </section>
    </section>
  </div>
</template>

<script>
import Header from '../FixedComponents/Header/Header';
import SideNav from '../FixedComponents/SideNav/SideNav';
import ListVideos from './ListVideos/ListVideos';

export default {
  components: { Header, SideNav, ListVideos },
  data() {
    return {
      shown: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,400i,500,700');

.homepage {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100%;

  .header-section {
    height: 4rem;
    width: 100%;
  }

  .main-content-and-nav-div {
    display: flex;
    height: 90vh;
    width: 100%;

    .side-nav {
      height: 100%;
      // width: 18.5%;
      // min-width: 230px;
      width: 430px;
    }

    .main-content {
      // overflow-wrap: break-word;
      // word-wrap: break-word;
      // overflow-y: hidden;
      overflow-y: hidden;
      height: 90vh;  // Redundant code. Find out why
      // min-width: 81.5%;
      min-width: 75.5%;
      background-color: #fafafa;
      padding: 0.5rem;

      // &:hover {
        overflow-y: scroll;
        
        // width
        &::-webkit-scrollbar {
          width: 5px;
        }
    
        // track
        &::-webkit-scrollbar-track {
          box-shadow: inset 0  0 5px grey;
          border-radius: 3px;
        }
    
        // handle
        &::-webkit-scrollbar-thumb  {
          background: #606770;
          border-radius: 3px;
        }
      // }
    }
  }
}
</style>