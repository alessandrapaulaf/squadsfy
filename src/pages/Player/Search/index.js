import React, { useState } from 'react';
import './search.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

function Search(props) {
  const [album, setAlbum] = useState({});
  const [artista, setArtista] = useState({});

  async function handleSearchArtista() {
    const found = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artista}&api_key=cfedf7f80f5776d69845ed9dd0b397e3&format=json`)
      .then(response => {
        if (response.ok)
          return response.json();
      });

    const artistas = found.results.artistmatches.artist
    props.found({ match: artistas, title: "Artistas encontrados" });

    handleSaveSearch(artista, "Artista");

  }

  function handleSaveSearch(value, type) {
    let item = {
      value: value,
      data: (new Date()).toLocaleDateString('pt-br'),
      tipo: type
    }

    let storage = localStorage.getItem(`@squadsFy/search`);
    let lista = [];

    if (storage) {
      lista = JSON.parse(storage);
      lista.push(item);
    } else {
      lista.push(item);
    }

    localStorage.setItem(`@squadsFy/search`, JSON.stringify(lista));
  }

  async function handleSearchAlbum() {
    const found = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=cfedf7f80f5776d69845ed9dd0b397e3&format=json`)
      .then(response => {
        if (response.ok)
          return response.json()
      });

    const albuns = found.results.albummatches.album;
    props.found({ match: albuns, title: "Álbuns encontrados" });

    handleSaveSearch(album, "Album");
  }


  return (
    <div class="search">
      <div class="tabs">
        <h2>Selecione uma opção</h2>
        <div class="tab-2">
          <label for="tab2-1">Artista</label>
          <input className="input" id="tab2-1" name="tabs-two" type="radio" />
          <div>
            <h4>Buscar por artista</h4>
            <Input onChange={event => setArtista(event.target.value)} placeholder="Digite o nome do artista"/>
            <Button id="button" onClick={handleSearchArtista} label="Buscar" />
          </div>
        </div>
        <div class="tab-2">
          <label for="tab2-2">Album</label>
          <input className="input" id="tab2-2" name="tabs-two" type="radio"/>
          <div>
            <h4>Buscar por Album</h4>
            <Input onChange={event => setAlbum(event.target.value)} placeholder="Digite o nome do album"/>
            <Button id="button" onClick={handleSearchAlbum} label="Buscar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;