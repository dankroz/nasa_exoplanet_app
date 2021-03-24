<template>
  <div>
    <v-row>
      <v-col v-for="(filter, index) in filterClasses" :key="index" cols="3">
        <v-autocomplete
          small-chips
          :items="items[filter.key]"
          :label="filter.name"
          @change="value => handleFilterChange({ value, key: filter.key })"
        >
          <!-- <template v-slot:selection="data">
            <v-chip
              close
              @click:close="args => removeSelection(args)"
            >
              {{ data.item }}
            </v-chip>
          </template> -->
        </v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {
  DiscoveryYear,
  DiscoveryMethod,
  HostName,
  DiscoveryFacility
} from "../../utils/filters";

const discoveryYear = new DiscoveryYear();
const discoveryMethod = new DiscoveryMethod();
const hostName = new HostName();
const discoveryFacility = new DiscoveryFacility();

export default {
  name: "filters",
  props: {},
  data: () => {
    return {
      filter: {
        pl_disc: null,
        pl_discmethod: null,
        pl_hostname: null,
        pl_facility: null
      },
      filterClasses: [
        discoveryYear,
        discoveryMethod,
        hostName,
        discoveryFacility
      ],
      items: {
        pl_disc: [],
        pl_discmethod: [],
        pl_hostname: [],
        pl_facility: []
      }
    };
  },
  watch: {},
  async created() {
    await this.setFilterOptions();
  },
  methods: {
    async setFilterOptions() {
      this.filterClasses.forEach(async i => {
        const key = i.key;
        const items = await i.getItems();
        this.items[key] = items;
      });
    },
    handleFilterChange({ value, key }) {
      this.filter[key] = value;
      this.$emit("filterUpdate", this.filter);
    }
    // removeSelection(args){
    //     console.log('args:::' , args)

    // }
  }
};
</script>
