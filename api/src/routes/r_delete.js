const { Router } = require("express");
const { Dog } = require("../db");

const router = Router();

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  try {
    if (id) {
      await Dog.destroy({
        where: {
          id: id
        }
      });
      res.send("Dog deleted succesfully!");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
