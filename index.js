// const name = "Maxence";
// const city = "Lille";
// const language = "JavaScript";

// console.log(`I am ${name}, wilder in ${city}, and i love ${language}`);

import dotenv from "dotenv";
// charge les variables du fichier .env
dotenv.config();

// lie mes variables aux variable du .env

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`I am ${name}, wilder in ${city}, and i love ${language}`);
