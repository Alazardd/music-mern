import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";
import Statistics from "./components/Statistics";
import Filter from "./components/Filter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filter />
        <SongForm />
        <SongList />
        <Statistics />
      </div>
    </Provider>
  );
}

export default App;
