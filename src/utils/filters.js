const axios = require("axios");
const baseQuery =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets";

class Filter {
  constructor() {}
  async getItems() {
    const query = baseQuery + `&select=distinct ${this.key}`;
    const res = (await axios.get(query)).data;
    let items = res.split("\n");
    items.shift();
    items.pop();
    if (this.number) {
      items = items.map(i => {
        return parseInt(i);
      });
      items.sort(function(a, b) {
        return b - a;
      });
    } else {
      items.sort();
    }
    return items;
  }
}

class DiscoveryYear extends Filter {
  constructor() {
    super();
  }
  key = "pl_disc";
  number = true;
  name = "Year of Discovery";
}

class DiscoveryMethod extends Filter {
  constructor() {
    super();
  }
  key = "pl_discmethod";
  name = "Discovery Method";
}

class HostName extends Filter {
  constructor() {
    super();
  }
  key = "pl_hostname";
  name = "Host Star Name";
}

class DiscoveryFacility extends Filter {
  constructor() {
    super();
  }
  key = "pl_facility";
  name = "Discovery Facility";
}

export { DiscoveryYear, DiscoveryMethod, HostName, DiscoveryFacility };
