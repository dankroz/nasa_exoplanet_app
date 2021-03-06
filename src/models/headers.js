const headers = [
  { text: "Host Star Name", value: "pl_hostname", default: true },
  { text: "Planet Letter", value: "pl_letter" },
  { text: "Planet Name", value: "pl_name", default: true },
  { text: "Year of Discovery", value: "pl_disc", default: true },
  { text: "Discovery Method", value: "pl_discmethod", default: true },
  { text: "Controversial Flag", value: "pl_controvflag" },
  { text: "Number of Planets in System", value: "pl_pnum" },
  { text: "Orbital Period (days)", value: "pl_orbper", default: true },
  // { text: "Orbit Semi-Major Axis (au)", value: "pl_orbsma" },
  { text: "Eccentricity", value: "pl_orbeccen" },
  { text: "Inclination (deg)", value: "pl_orbincl" },
  { text: "Planet Mass or M*sin(i) [Jupiter mass]", value: "pl_bmassj" },
  { text: "Planet Mass or M*sin(i) Provenance", value: "pl_bmassprov" },
  { text: "Planet Radius (Jupiter radii)", value: "pl_radj" },
  { text: "Planet Density (g/cm**3)", value: "pl_dens" },
  { text: "TTV Flag", value: "pl_ttvflag" },
  { text: "Kepler Field Flag", value: "pl_kepflag" },
  { text: "K2 Mission Flag", value: "pl_k2flag" },
  { text: "Number of Notes", value: "pl_nnotes" },
  { text: "RA (sexagesimal)", value: "ra_str" },
  { text: "Dec (sexagesimal)", value: "dec_str" },
  { text: "RA (decimal degrees)", value: "ra" },
  { text: "Dec (decimal degrees", value: "dec" },
  { text: "Distance (pc)", value: "st_dist", default: true },
  { text: "Gaia Distance [pc]", value: "gaia_dist" },
  { text: "Optical Magnitude [mag]", value: "st_optmag" },
  { text: "Optical Magnitude Band", value: "st_optband" },
  { text: "G-band (Gaia) [mag]", value: "gaia_gmag" },
  { text: "Effective Temperature (K)", value: "st_teff" },
  { text: "Stellar Mass (solar mass)", value: "st_mass", default: true },
  { text: "Stellar Radius (solar radii)", value: "st_rad" },
  { text: "Date of Last Update", value: "rowupdate" },
  { text: "Discovery Facility", value: "pl_facility", default: true }
];

const fields = [
  "pl_disc",
  "pl_hostname",
  "pl_letter",
  "pl_name",
  "pl_discmethod",
  "pl_controvflag",
  "pl_pnum",
  "pl_orbper",
  // "pl_orbsma",
  "pl_orbeccen",
  "pl_orbincl",
  "pl_bmassj",
  "pl_bmassprov",
  "pl_radj",
  "pl_dens",
  "pl_ttvflag",
  "pl_kepflag",
  "pl_k2flag",
  "pl_nnotes",
  "ra_str",
  "dec_str",
  "ra",
  "dec",
  "st_dist",
  "gaia_dist",
  "st_optmag",
  "st_optband",
  "gaia_gmag",
  "st_teff",
  "st_mass",
  "st_rad",
  "rowupdate",
  "pl_facility"
];

const getDefaultHeaders = () => {
  return headers.filter(i => i.default);
};

module.exports = { headers, fields, getDefaultHeaders };
