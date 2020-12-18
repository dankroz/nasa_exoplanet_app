<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center" @click="$router.go('/')">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon @click.stop="$emit('drawerClick')"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "topBar",
  data: () => {
    return {};
  }
};
</script>
