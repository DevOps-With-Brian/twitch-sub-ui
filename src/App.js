import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";
import BackgroundVideo from "./components/background-video/background-video.component";
import background from './Background.mp4';

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [filteredSubscribers, setFilterSubscribers] = useState(subscribers);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setSubscribers(users));
      console.log('users-fetch')
  }, []);

  useEffect(() => {
    const newFilteredSubscribers = subscribers.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterSubscribers(newFilteredSubscribers);
  }, [subscribers, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <BackgroundVideo videoSource={background} blur={2}>
      <div className="App">
        <h1 className="app-title">Subscribers</h1>

        <SearchBox
          className="subscribers-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search subscribers"
        />

        <CardList subscribers={filteredSubscribers} />
      </div>
    </BackgroundVideo>
  );
};

export default App;
