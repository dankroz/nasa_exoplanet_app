const axios = require("axios");

const baseQuery =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets";

export const getDiscoveryMethods = async () => {
  let query = baseQuery;
  query += `&select=distinct pl_discmethod`;

  const res = (await axios.get(query)).data;

  let methodArr = res.split("\n");
  methodArr.shift();
  methodArr.pop();

  methodArr.sort();

  return methodArr;
};
