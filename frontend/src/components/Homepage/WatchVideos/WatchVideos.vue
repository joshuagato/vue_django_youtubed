<template>
  <div class="watch-videos-div">
    <section class="left-section">
      <section class="video-play-section"></section>
      <section class="video-title-section">I Left my Job at Google - Here's why! - Here's why!</section>
      <section class="video-stats-section">
        <div class="left-stats">
          <span>327,235 views</span>
          <span class="separator">*</span>
          <span>27 Aug 2019</span>
        </div>
        <div class="right-controls">
          <article>
            <span class="marg"><FontAwesomeIcon :icon="faThumbsUp" /></span>
            <span>10K</span>
          </article>
          <article>
            <span class="marg"><FontAwesomeIcon :icon="faThumbsDown" /></span>
            <span>370</span>
          </article>
          <article>
            <span class="marg"><FontAwesomeIcon :icon="faShare" /></span>
            <span>SHARE</span>
          </article>
          <article>
            <span class="marg"><FontAwesomeIcon :icon="faSave" /></span>
            <span>SAVE</span>
          </article>
          <article>
            <span><FontAwesomeIcon :icon="faDotCircle" /></span>
          </article>
        </div>
      </section>
      <section class="profile-section">
        <div class="profile-details">
          <article class="profile-pic">
            <img :src="'./../../../static/assets/images/pp2.jpg'" alt="" />
          </article>
          <article class="profile">
            <span class="name">Clement Mihailescu</span>
            <span class="subscribers">69K subscribers</span>
          </article>
        </div>
        <article>
          <button>SUBSCRIBE</button>
        </article>
      </section>
    </section>
    
    <section class="right-section">
      x
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown, faShare, faSave, faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default {
  data() {
    return {
      faThumbsUp: faThumbsUp, faThumbsDown: faThumbsDown, faShare: faShare, faSave: faSave, faDotCircle: faDotCircle
    }
  }
}
</script>

<style lang="scss" scoped>
.watch-videos-div {
  // width: 100%;
  // display: flex;
  // display: inline-block;
  margin: 1rem 1rem;

  .left-section {
    min-width: 66%;
    margin-right: 2rem;

    .video-play-section {
      width: 100%;
      height: 25rem;
      // background-color: #6d6d6d;
      background-color: #282828;
    }

    .video-title-section {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      color: #282828;
    }

    .video-stats-section {
      color: #444950;
      font-size: 14px;
      font-weight: 600;
      margin-top: 0.8rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #DADDE1;

      .left-stats {
        .separator {
          margin: 0 0.5rem;
        }
      }

      .right-controls {
        display: flex;
        margin-bottom: 1rem;

        article {
          margin-left: 1rem;

          .marg {

            svg {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }

    .profile-section {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .profile-details {
        display: flex;

        .profile-pic {
          width: 3.2rem;
          height: 3.2rem;
          margin-right: 1rem;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .profile {
          display: flex;
          flex-direction: column;

          .name {
            color: #282828;
            // font-size: 1rem;
            font-weight: 600;
          }

          .subscribers {
            color: #444950;
            font-size: 14px;
          }
        }
      }
    }
  }

  .right-section {
    max-width: 30%;
  }
}
</style>