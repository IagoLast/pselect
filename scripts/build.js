/**
 * Create a file joining theprovinces and municipes data extracted from the INE webpage.
 *
 * This file named prov-data-js) is concated to pselect.js, the file exposes 2 global variables 
 * used in the pselect.js file.
 * 
 */
'use strict';
const fs = require('fs');

const PROV_DATA_URL = '../src/prov-data.js';
const DATA_PROV = '../data/provincias.json';
const DATA_MUN = '../data/municipios.json';
const VAR_PROV = 'pselectDataProvinces';
const VAR_MUN = 'pselectDataMunicipes';

let provincesFile = fs.readFileSync(DATA_PROV);
let municipesFile = fs.readFileSync(DATA_MUN);
let dataFile = fs.openSync(PROV_DATA_URL, 'w+');
let data = `var ${VAR_PROV} = ${provincesFile.toString()}; var ${VAR_MUN} = ${municipesFile.toString()}`;

fs.writeFileSync(dataFile, data);
