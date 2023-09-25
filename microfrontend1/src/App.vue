<template>
  <img id="logo" alt="Vue logo" v-bind:src="getImageUrl('logo')" />
  <HelloWorld msg="Hello Vue 3.0 + Vite in SCHENEIDER" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    getImageUrl(name) {
      return new URL(`./assets/${name}.png`, import.meta.url).href;
    },
  },
};
</script>
