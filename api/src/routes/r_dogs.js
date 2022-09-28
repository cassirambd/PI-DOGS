const { Router } = require("express");
const { getAllInfo } = require("../controllers/c_dog");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = await getAllInfo();
    if (name) {
      const dogName = await allDogs.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length
        ? res.status(200).json(dogName)
        : res.status(404).json("Sorry, that breed doesn't exist");
    } else {
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allDogs = await getAllInfo();
    if (id) {
      const dogId = await allDogs.filter((d) => d.id == id);
      dogId.length
        ? res.status(200).json(dogId)
        : res.status(404).json("Sorry, dog not found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
