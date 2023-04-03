import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../actions/songActions";
import { StatisticsContainer } from "./styles";

const Filter = () => {
  const filter = useSelector((state) => state.songs.filter);
  const genres = useSelector((state) => state.songs.statistics.genres);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <StatisticsContainer>
      <h2>Song types</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All Genres</option>
        {genres &&
          genres.map((genre) => (
            <option key={genre._id} value={genre._id}>
              {genre._id}
            </option>
          ))}
      </select>
    </StatisticsContainer>
  );
};

export default Filter;
