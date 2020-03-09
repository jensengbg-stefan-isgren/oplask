<template>
  <section class="home_section">
    <h1 class="title">oPlask</h1>
    <label for="search_photo"></label>
    <input
      class="input_search"
      v-model="input"
      type="text"
      id="search_photo"
      @keyup.enter="getPhotos"
    />
    <card class="card_section" :photos="photos" />
  </section>
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

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
}
.home_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
}
.input_search {
  text-align: center;
  width: 400px;
  height: 50px;
  border: none;
  background-color: #eeeeee;
  border-radius: 80px;
  outline: none;
}
.title {
  align-self: flex-start;
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>