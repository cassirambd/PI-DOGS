const { Router } = require("express");
const { getAllInfo, getApiInfo, getDbInfo } = require("../controllers/c_dog");

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
    next(error);
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
    next(error);
  }
});

module.exports = router;
