<<<<<<< Updated upstream
=======
<template>
  <div class="cards">
    <li @click="lightbox(photo)" class="card" v-for="(photo,index) in photos" :key="index">
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
    lightbox(photo) {
      console.log(photo);
      this.$router.push("/overlay", photo);
    }
  }
};
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  height: 100%;

  display: grid;
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
>>>>>>> Stashed changes
