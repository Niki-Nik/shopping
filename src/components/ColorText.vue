<template>
  <button class="dark btn btn-outline-secondary" v-on:click="colorText">
    ColorText
  </button>
</template>

<script>
export default {
  data() {
    return {
      isColor: false,
    };
  },
  methods: {
    colorText() {
      if (this.isColor === false) {
        this.isColor = true;
        document.querySelector("h1").style.color = "#f50057";
        document.querySelector("tbody").style.color = "#f50057";
      } else {
        this.isColor = false;
        document.querySelector("h1").style.color = "black";
        document.querySelector("tbody").style.color = "#fff";
      }
    },
  },
};
</script>

<style></style>
