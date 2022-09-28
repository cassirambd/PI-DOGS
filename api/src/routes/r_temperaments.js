const { Router } = require("express");
const { getApiInfo } = require("../controllers/c_temperament");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dbTemperaments = await getApiInfo();
    res.status(200).json(dbTemperaments);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router; 
