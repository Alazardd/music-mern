import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSong, deleteSong } from "../actions/songActions";

const SongItem = ({ song }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);
  const [image, setImage] = useState(song.image);

  const dispatch = useDispatch();

  const handleUpdateSong = () => {
    dispatch(updateSong({ id: song._id, title, artist, album, genre, image }));
    setIsEditing(false);
  };

  const handleDeleteSong = () => {
    dispatch(deleteSong(song._id));
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleUpdateSong}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <img src={image} alt={song.title} style={{ width: "100%" }} />
        <ul>
          <li>
            <strong>Title:</strong> {song.title}
          </li>
          <li>
            <strong>Artist:</strong> {song.artist}
          </li>
          <li>
            <strong>Album:</strong> {song.album}
          </li>
          <li>
            <strong>Genre:</strong> {song.genre}
          </li>
        </ul>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDeleteSong} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </li>
    );
  }
};

export default SongItem;
