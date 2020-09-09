import React, { useEffect, useState } from 'react';
import List from './List';
import Header from './../../components/Header';
import Search from './Search';
import './player.css';

function Player() {
  const [topArtistas, setTopArtistas] = useState({});
  const [foundValues, setFoundValues] = useState({});
  const [title, setTitle] = useState("Top 10 Artistas");

  useEffect(() => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=cfedf7f80f5776d69845ed9dd0b397e3&format=json&page=1&limit=10')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTopArtistas(data.artists.artist);
      })
  }, []);

  function changeValues(values) {
    setFoundValues(values.match);
    setTitle(values.title);
  }

  return (
    <Header>
      <div>
        <div md={6}>
          <div className="player">
            <Search
              found={(values) => changeValues(values)} />
          </div>
        </div>
        <div md={6}>
          <div>
            <h1>{title}</h1>
            {
              topArtistas.length &&
              <List values={foundValues.length > 0 ? foundValues : topArtistas} tipo={title} />
            }
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Player;