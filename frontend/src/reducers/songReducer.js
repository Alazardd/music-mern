import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSongsSuccess,
  addSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
  fetchStatisticsSuccess,
  updateStatistics,
} from "../actions/songActions";
import { setFilter } from "../actions/songActions";

const initialState = {
  songs: [],
  statistics: {},
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongsSuccess, (state, action) => {
        state.songs = action.payload;
      })
      .addCase(addSongSuccess, (state, action) => {
        state.songs.push(action.payload);
      })
      .addCase(updateSongSuccess, (state, action) => {
        const index = state.songs.findIndex(
          (song) => song._id === action.payload._id
        );
        state.songs[index] = action.payload;
      })
      .addCase(deleteSongSuccess, (state, action) => {
        state.songs = state.songs.filter((song) => song._id !== action.payload);
      })
      .addCase(fetchStatisticsSuccess, (state, action) => {
        state.statistics = action.payload;
      })
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload;
      })
      .addCase(updateStatistics, (state) => {
        // Update the statistics based on the current state of the songs
        const totalSongs = state.songs.length;
        const totalArtists = new Set(state.songs.map((song) => song.artist))
          .size;
        const totalAlbums = new Set(state.songs.map((song) => song.album)).size;

        const artistCounts = {};
        const albumCounts = {};

        state.songs.forEach((song) => {
          // Count the number of songs for each artist
          if (artistCounts[song.artist]) {
            artistCounts[song.artist].songs++;
          } else {
            artistCounts[song.artist] = { songs: 1, albums: new Set() };
          }
          // Keep track of the albums that each artist has
          artistCounts[song.artist].albums.add(song.album);

          // Count the number of songs for each album
          if (albumCounts[song.album]) {
            albumCounts[song.album]++;
          } else {
            albumCounts[song.album] = 1;
          }
        });

        const artistStats = Object.entries(artistCounts).map(
          ([artist, counts]) => ({
            artist,
            songs: counts.songs,
            albums: counts.albums.size,
          })
        );

        const albumStats = Object.entries(albumCounts).map(
          ([album, count]) => ({
            album,
            songs: count,
            artists: new Set(
              state.songs
                .filter((song) => song.album === album)
                .map((song) => song.artist)
            ).size,
          })
        );

        state.statistics = {
          totalSongs,
          totalArtists,
          totalAlbums,
          artistStats,
          albumStats,
        };
      });
  },
});

export default songSlice.reducer;
