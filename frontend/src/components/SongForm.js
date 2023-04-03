import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../actions/songActions";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ title, artist, album, genre, image }));
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    setImage("");
  };
  const style = {
    width: "10%",
    padding: "0.5rem",
    marginBottom: "0.5rem",
    border: "4px solid #ccc",
    borderRadius: "10px",
  };

  return (
    <form onSubmit={handleSubmit} align="center">
      <input
        style={style}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={style}
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        style={style}
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />
      <input
        style={style}
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        style={style}
        type="url"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default SongForm;
