<template>
  <div>
    <h1>oPlask</h1>
    <label for="search_photo"></label>
    <input
      v-model="input"
      type="text"
      id="search_photo"
      @keyup.enter="getPhotos"
    />
    <card :photos="photos" />
  </div>
</template>

<script>
import card from "../components/card";
export default {
  name: "search",
  components: { card },
  data() {
    return {
      input: "",
      photos: [],
      access_key: "r0jDWQk-svIMQus1EeT1kxtuo-58YkUXN-j_hx3NXnw"
    };
  },
  methods: {
    async getPhotos() {
      let url = `https://api.unsplash.com/search/photos?page=1&per_page=9&query=${this.input}&client_id=${this.access_key}`;
      let response = await fetch(url, { method: "GET" });
      let data = await response.json();
      console.log(data.results);
      this.photos = data.results;
    }
  }
};
</script>

<style lang="scss" scoped></style>
