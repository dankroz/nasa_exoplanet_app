<template>
  <v-card hover>
    <v-card-title>Explore the exoplanetaries</v-card-title>
    <v-card-text>
      <v-row>
        <!-- <v-col cols="3">
          <v-combobox
            id="selectHeadersCombobox"
            ref="selectedHeaders"
            v-model="selectedHeaders"
            :items="headers"
            label="Selected Columns"
            multiple
          />
        </v-col> -->
      </v-row>

      <Filters @filterUpdate="handleFilterUpdate" />

      <v-data-table
        :headers="selectedHeaders"
        :items="items"
        :items-per-page="itemsPerPage"
        :loading="loading"
        loading-text="Loading... Please wait"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
const axios = require("axios");
import { headers, fields, getDefaultHeaders } from "../../models/headers";
import { getQuery, getCount } from "../../utils/createQuery";
import { getYearQuery } from "../../utils/getYearQuery";
import { getDiscoveryMethods } from "../../utils/discoveryMethods";
import Filters from "./filters";

export default {
  name: "Home",
  components: { Filters },
  data: () => {
    return {
      headers,
      fields,
      items: [],
      filter: {},
      loading: true,
      selectedHeaders: [],
      itemsPerPage: 10
    };
  },
  watch: {},
  async created() {
    this.selectedHeaders = getDefaultHeaders();
    await this.getItems();
  },
  mounted() {},
  methods: {
    async getItems() {
      this.loading = true;
      const query = getQuery(this.filter);
      try {
        const res = (await axios.get(query)).data;
        this.items = res;
      } catch (err) {
        console.log("err::: ", err);
      }
      this.loading = false;
    },
    async handleFilterUpdate(filter) {
      this.filter = filter;
      await this.getItems();
    }
  }
};
</script>

<style></style>
