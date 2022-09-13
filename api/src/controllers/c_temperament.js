const axios = require("axios");
const { Temperament } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const apiInfo = await apiUrl.data;
  const temperaments = apiInfo
    .map((d) => d.temperament)
    .join()
    .split(",");

  await temperaments
    .filter((t, i) => temperaments.indexOf(t) === i)
    .forEach((t) => t.trim() !== "" &&
        Temperament.findOrCreate({
          where: {
            name: t.trim().toLowerCase()
          },
        })
    );

  const allTemperaments = await Temperament.findAll();
  return allTemperaments;
};

module.exports = {
  getApiInfo
};
