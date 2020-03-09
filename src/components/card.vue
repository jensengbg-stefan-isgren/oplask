<template>
  <div class="cards">
    <ul>
      <li v-for="(photo, index) in photos" :key="index">
        <img :src="photo.urls.regular" alt />
      </li>
    </ul>
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
  }
};
</script>

<style lang="scss" scoped></style>