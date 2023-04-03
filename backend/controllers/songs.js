const Song = require('../models/song');

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSong = async (req, res) => {
  const { title, artist, album, genre, image } = req.body;
  const newSong = new Song({
    title,
    artist,
    album,
    genre,
    image,
  });

  try {
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSong = async (req, res) => {
  const { id } = req.params;
  const { title, artist, album, genre, image } = req.body;

  try {
    const updatedSong = await Song.findByIdAndUpdate(
      id,
      { title, artist, album, genre, image },
      { new: true }
    );
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  const { id } = req.params;

  try {
    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};