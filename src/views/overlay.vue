<template>
  <div class="overlay">
    <section class="lightbox">
      <div class="top">
        <button @click="closeOverlay" class="closeOverlay">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <img class="img" src="../assets/test.jpg" alt />
      <div class="footer">
        <h3 class="author">
          <i class="fas fa-user-circle"></i> Fotograf von Fotografsson
        </h3>
        <button class="download">Download full image</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    closeOverlay() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

$quicksand: "Quicksand", sans-serif;

$black: #071619;

.overlay {
  background: $black;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .lightbox {
    width: 50%;

    .top {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      background: none;
      .closeOverlay {
        display: flex;
        align-self: flex-end;
        color: white;
        padding: 10px;
        background: none;
        border: none;
        cursor: pointer;
      }
    }

    .img {
      width: 100%;
      height: 100%;
    }

    .footer {
      height: 3rem;
      align-items: center;
      display: flex;
      justify-content: space-between;

      .author {
        display: flex;
        align-items: center;
        i {
          font-size: 2rem;
          padding-right: 1rem;
        }
        color: white;
      }

      .download {
        border: 2px solid rgba(255, 255, 255, 0.609);
        border-radius: 3px;
        font-family: $quicksand;
        background: none;
        padding: 5px 10px;
        color: white;
      }
    }
  }
}
</style>