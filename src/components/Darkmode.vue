<template>
  <button v-on:click="darkMode" class="dark btn btn-outline-secondary">
    Dark mode
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    darkMode: function() {
      if (this.isDarkMode === false) {
        this.isDarkMode = true;
        document.querySelector("body").style.backgroundColor =
          "rgb(41, 40, 40)";
        document.querySelector("h1").style.color = "#fff";
      } else {
        this.isDarkMode = false;
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelector("h1").style.color = "black";
      }
    },
  },
};
</script>

<style></style>
