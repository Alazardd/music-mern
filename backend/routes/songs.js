const express = require("express");
const router = express.Router();
const {
  getSongs,
  addSong,
  updateSong,
  deleteSong,
} = require("../controllers/songs");

router.get("/", getSongs);
router.post("/", addSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

module.exports = router;
