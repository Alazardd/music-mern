import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../actions/songActions";
import SongItem from "./SongItem";
import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
}));

const SongList = () => {
  const songs = useSelector((state) => state.songs.songs);
  const filter = useSelector((state) => state.songs.filter);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const filteredSongs = filter
    ? songs.filter((song) => song.genre === filter)
    : songs;

  return (
    <div>
      <Grid container spacing={3}>
        {filteredSongs.map((song) => (
          <Grid item xs={4} sm={3} md={3} key={song._id}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <SongItem song={song} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SongList;
