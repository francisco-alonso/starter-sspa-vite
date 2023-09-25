<template>
  <img id="logo" alt="Vue logo" v-bind:src="getImageUrl('logo')" />
  <HelloWorld msg="SCHNEIDER MICROFRONTEND 1" />
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
