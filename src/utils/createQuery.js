import { headers, fields } from "../models/headers";

const numberKeys = ["pl_disc"];

const baseQuery =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets";

const addSelect = baseQuery => {
  let select = `&select=`;
  fields.forEach((field, index) => {
    select += index === fields.length - 1 ? `${field}` : `${field},`;
  });
  return baseQuery + select;
};

const setWhere = (query, filter) => {
  let where = "";
  const keys = Object.keys(filter);
  keys.forEach(key => {
    if (filter[key]) {
      if (numberKeys.includes(key)) {
        where +=
          where.length > 0
            ? ` and ${key}=${filter[key]}`
            : `&where=${key}=${filter[key]}`;
      } else {
        where +=
          where.length > 0
            ? ` and ${key} like '${filter[key]}'`
            : `&where=${key} like '${filter[key]}'`;
      }
    }
  });
  return where.length > 0 ? query + where : query;
};

const getQuery = filter => {
  let query = baseQuery;

  query = addSelect(query);
  query += `&format=json`;
  query = setWhere(query, filter);
  return query;
};

export { getQuery };
