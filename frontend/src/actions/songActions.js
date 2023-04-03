import { createAction } from "@reduxjs/toolkit";

export const fetchSongs = createAction("FETCH_SONGS");
export const fetchSongsSuccess = createAction("FETCH_SONGS_SUCCESS");
export const fetchSongsError = createAction("FETCH_SONGS_ERROR");

export const addSong = createAction("ADD_SONG");
export const addSongSuccess = createAction("ADD_SONG_SUCCESS");
export const addSongError = createAction("ADD_SONG_ERROR");

export const updateSong = createAction("UPDATE_SONG");
export const updateSongSuccess = createAction("UPDATE_SONG_SUCCESS");
export const updateSongError = createAction("UPDATE_SONG_ERROR");

export const deleteSong = createAction("DELETE_SONG");
export const deleteSongSuccess = createAction("DELETE_SONG_SUCCESS");
export const deleteSongError = createAction("DELETE_SONG_ERROR");

export const fetchStatistics = createAction("FETCH_STATISTICS");
export const fetchStatisticsSuccess = createAction("FETCH_STATISTICS_SUCCESS");
export const fetchStatisticsError = createAction("FETCH_STATISTICS_ERROR");

export const setFilter = createAction("SET_FILTER");

export const updateStatistics = createAction("UPDATE_STATISTICS");
