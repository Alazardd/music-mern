import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatistics, updateStatistics } from "../actions/songActions";
import { StatisticsContainer } from "./styles";

const Statistics = () => {
  const statistics = useSelector((state) => state.songs.statistics);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {
    dispatch(fetchStatistics());
    dispatch(updateStatistics());
  }, [dispatch]);

  const handleChange = (event) => {
    setSelectedOption(Number(event.target.value));
  };

  return (
    <StatisticsContainer>
      <h2>Statistics</h2>
      <select value={selectedOption} onChange={handleChange}>
        <option value={1}>Total</option>
        <option value={2}>Artists</option>
        <option value={3}>Albums</option>
      </select>

      {selectedOption === 1 && (
        <div className="section">
          <h3>Total</h3>
          <div className="row">
            <div className="col">
              <p>Songs</p>
              <p>{statistics.totalSongs}</p>
            </div>
            <div className="col">
              <p>Albums</p>
              <p>{statistics.totalAlbums}</p>
            </div>
            <div className="col">
              <p>Artists</p>
              <p>{statistics.totalArtists}</p>
            </div>            
          </div>
        </div>
      )}

      {selectedOption === 2 && (
        <div className="section">
          <h3>Artists</h3>
          <div className="row">
            <div className="col">
              <p>Artist</p>
            </div>
            <div className="col">
              <p>Songs</p>
            </div>
            <div className="col">
              <p>Albums</p>
            </div>
          </div>
          {statistics.artistStats &&
            statistics.artistStats.map((artist) => (
              <div className="row" key={artist.artist}>
                <div className="col">
                  <p>{artist.artist}</p>
                </div>
                <div className="col">
                  <p>{artist.songs}</p>
                </div>
                <div className="col">
                  <p>{artist.albums}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      {selectedOption === 3 && (
        <div className="section">
          <h3>Albums</h3>
          <div className="row">
            <div className="col">
              <p>Album</p>
            </div>
            <div className="col">
              <p>Songs</p>
            </div>
            <div className="col">
              <p>Artists</p>
            </div>
          </div>
          {statistics.albumStats &&
            statistics.albumStats.map((album) => (
              <div className="row" key={album.album}>
                <div className="col">
                  <p>{album.album}</p>
                </div>
                <div className="col">
                  <p>{album.songs}</p>
                </div>
                <div className="col">
                  <p>{album.artists}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </StatisticsContainer>
  );
};

export default Statistics;
