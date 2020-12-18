<template>
  <v-navigation-drawer absolute bottom right v-model="drawer">
    <v-list nav dense>
      <!-- update to different links -->
      <v-list-item-group>
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navDrawer",
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {};
  }
};
</script>
