<template>
  <v-app>
    <appBar @drawerClick="drawer = !drawer" />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
      <navDrawer :drawer="drawer" />
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./appBar";
import navDrawer from "./navDrawer";

export default {
  name: "App",
  components: {
    appBar,
    navDrawer
  },
  data: () => ({
    drawer: false
  })
};
</script>
