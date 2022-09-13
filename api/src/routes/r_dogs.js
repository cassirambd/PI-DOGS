const { Router } = require("express");
const { getAllInfo } = require("../controllers/c_dog");
const { Dog, Temperament } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllInfo();
    if (name) {
      const dogName = await allDogs.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.status(404).send("Sorry, that breed doesn't exist");
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    //este catch me va a agarrar todos lo errores de sequelize y se lo pasa al control centralizado de errores de app.js
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allDogs = await getAllInfo();
    if (id) {
      const dogId = await allDogs.filter((d) => d.id == id);
      dogId.length
        ? res.status(200).json(dogId)
        : res.status(404).send("Sorry, dog not found");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, height, weight, life_span, image, temperament, createdInDb } = req.body;
    const dogCreated = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
      createdInDb, //le paso los mismos atributos del modelo porque lo voy a agregar a la base de datos
    });
    const temperamentDb = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });
    dogCreated.addTemperament(temperamentDb);
    res.status(201).send("Dog succesfully created!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
