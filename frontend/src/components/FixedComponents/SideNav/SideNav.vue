<template>
  <aside class="side-nav-div">
    <MenuItem navto='/' :faicon="faHome" title="Home" />
    <MenuItem navto='/' :faicon="faFireAlt" title="Trending" />
    <MenuItem navto='/' :faicon="faYoutubeSquare" title="Subscriptions" />
    <hr>
    <MenuItem navto='/' :faicon="faFolder" title="Library" />
    <MenuItem navto='/' :faicon="faHistory" title="History" />
    <MenuItem navto='/' :faicon="faClock" title="Watch Later" />
    <MenuItem navto='/' :faicon="faThumbsUp" title="Liked Videos" />
    <hr>
    <MenuItem navto='/' :faicon="faFire" title="Popular..." />
    <MenuItem navto='/' :faicon="faHistory" title="Music" />
    <MenuItem navto='/' :faicon="faFootballBall" title="Sports" />
    <MenuItem navto='/' :faicon="faGamepad" title="Gaming" />
    <hr>
    <MenuItem navto='/' :faicon="faCog" title="Settings" />
    <MenuItem navto='/' :faicon="faFlag" title="Report history" />
    <MenuItem navto='/' :faicon="faQuestionCircle" title="Help" />
    <MenuItem navto='/' :faicon="faHackerNews" title="Send feedback" />
    <hr>
</aside>
</template>

<script>
import MenuItem from './MenuItem/MenuItem.vue';
import { faHome, faHistory, faFolder, faQuestionCircle, faClock, faFireAlt, faFire, faThumbsUp, faCog, faFlag, faFootballBall, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHackerNews, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default {
  components: { MenuItem },
  data() {
    return {
      faHome: faHome, faFireAlt: faFireAlt, faYoutubeSquare: faYoutubeSquare, faFolder: faFolder,
      faHistory: faHistory, faClock: faClock, faThumbsUp: faThumbsUp, faFire: faFire, faHistory: faHistory,
      faFootballBall: faFootballBall, faGamepad: faGamepad, faCog: faCog, faFlag: faFlag,
      faQuestionCircle: faQuestionCircle, faHackerNews: faHackerNews
    }
  }
}
</script>

<style lang="scss" scoped>
.side-nav-div {
  padding-top: 0.8rem;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  background-color: #f5f5f5;
  // border-right: 1px solid #DADDE1;

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
    &::-webkit-scrollbar-thumb {
      background: #606770;
      border-radius: 3px;
    }
  // }

  hr {
    margin: 1.5rem 0;
    border-color: #c4c6c9e6;
  }
}
</style>