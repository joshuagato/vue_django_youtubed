<template>
  <div class="list-video">
    <section @click="watch" class="list-videos-upper-section">
      <div class="video">
        <img :src="vidImg" :alt="altname" />
        <span class="duration">{{ duration }}</span>
      </div>
      <div class="description">
        <img :src="userImg" :alt="altname" />
        <span class="desc-text">{{ desc }}</span>
      </div>
    </section>

    <section class="list-videos-lower-section">
      <div class="upload-details">
        <p class="username">{{ username }}</p>
        <p>{{ views + 'K' }} view(s) - {{ age }} months ago</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['vidImg', 'altname', 'duration', 'userImg', 'desc', 'username', 'views', 'age'],
  methods: {
    watch() {
      this.$router.push('/watch-videos');
    }
  }
}
</script>

<style lang="scss" scoped>
.list-video {
  // min-width: 16rem;
  // width: 16rem;
  max-width: 16rem;
  margin: 1.5rem 0.5rem;
  display: inline-block;

  .list-videos-upper-section {
    width: 100%;
    height: 100%;
    cursor: pointer;

    .video {
      position: relative;
      width: 100%;
      height: 11rem;

      .duration {
        position: absolute;
        padding: 0.1rem 0.3rem;
        font-size: 12px;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        bottom: 5px;
        right: 5px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      display: flex;
      width: 100%;
      margin-top: 1rem;
      // overflow: hidden;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 0.9rem;
      }

      .desc-text {
        color: #404040;
        font-size: 15px;
        font-weight: 500;
        text-align: left;
        // line-height: 1rem;
      }
    }
  }

  .list-videos-lower-section {
    width: 100%;
    height: 100%;
    margin-top: 0.6rem;
    // text-align: center;

    .upload-details {
      margin-left: 3.5rem;
        
      p {
        font-size: 14px;
        font-weight: 400;
        color: #444950;
        margin: 0;
        text-align: left;

        &.username {
          cursor: pointer;
        }
      }
    }
  }
}
</style>