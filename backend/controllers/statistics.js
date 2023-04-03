const Song = require("../models/song");

exports.getStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const genres = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    const stats = {
      totalSongs,
      genres,
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
