const axios = require("axios");

const baseQuery =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets";

const getYearQuery = () => {
  let query = baseQuery;

  query += `&select=distinct pl_disc`;

  return query;
};

export { getYearQuery };
