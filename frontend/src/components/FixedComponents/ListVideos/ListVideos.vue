<template>
  <div class="list-videos">
    <section class="recommended-section add-margin">
      <div class="heading">
        <h4>Recommended</h4>
      </div>
      <section>
        <ListVideo v-for="itr in myArray" :key="itr" watch="watchHandler" :vidImg="pp" duration="3:06"
          :altname="alttitle" :userImg="pp" :desc="desc" :username="usnm"  views="89" age="10" />
      </section>
    </section>

    <section class="trending-section add-margin">
      <div class="heading">
        <h4>Trending</h4>
      </div>
      <section>
        <ListVideo v-for="itr in myArray" :key="itr" watch="watchHandler" :vidImg="pp" duration="3:06"
        :altname="alttitle" :userImg="pp" :desc="desc" :username="usnm"  views="89" age="10" />
      </section>
    </section>
  </div>
</template>

<script>
import ListVideo from './ListVideo/ListVideo';

export default {
  components: { ListVideo },
  data() {
    return {
      myArray: [1,2,3,4,5,6,7,8],
      usnm: "Clement Mihailescu",
      desc: "I Left my Job at Google - Here's why! - Here's why!",
      pp: "./../../static/assets/images/pp.jpg",
      alttitle: "An image"
    }
  },
  methods: {
    watchHandler() {}
  }
}
</script>

<style lang="scss" scoped>
.list-videos {
  width: 100%;

  .recommended-section {
    width: 100%;

    section {
      text-align: center;
    }
  }

  .trending-section {
    width: 100%;

    section {
      text-align: center;
    }
  }

  .add-margin {
    margin-top: 1.9rem;
  }

  .heading {
    color: #404040;
    font-size: 20px;
    font-weight: normal;
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
}
</style>