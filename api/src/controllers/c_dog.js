const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const apiInfo = await apiUrl.data.map((d) => {
    return {
      id: d.id,
      name: d.name,
      height: d.height,
      weight: d.weight,
      life_span: d.life_span,
      temperament: d.temperament,
      image: d.image,
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return Dog.findAll({ //el findAll devuelve siempre un arreglo
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllInfo = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};


module.exports = {
  getApiInfo,
  getDbInfo,
  getAllInfo
};
