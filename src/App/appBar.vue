<template>
  <v-app-bar app color="primary" dark class="mb-1">
    <div class="d-flex align-center" @click="$router.go('/')">
      <v-img
        class="shrink mr-2"
        contain
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
        transition="scale-transition"
        width="100"
      />
    </div>
    <h3>Not Actually Space Aeronautics</h3>
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
