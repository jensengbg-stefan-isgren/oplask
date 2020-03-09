<template>
  <div class="cards">
    <li @click="lightbox(index)" class="card" v-for="(photo,index) in photos" :key="index">
      <img :src="photo.urls.regular" alt />
    </li>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    photos: Array
  },
  data() {
    return {};
  },
  methods: {
    lightbox(index) {
      console.log(index);
      this.$emit("openLightbox");
      this.$router.push("/overlay/" + index);
    }
  }
};
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  height: 100%;

  display: grid;
  justify-content: space-between;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 30% 30% 30%;
  column-gap: 1rem;
  row-gap: 1rem;

  .card {
    list-style: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

