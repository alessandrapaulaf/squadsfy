import React, { useState } from 'react';
import './search.css';

function Search(props) {
    const [ album, setAlbum ] = useState({});
    const [ artista, setArtista ] = useState({});

    async function handleSearchArtista(){
        const found = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artista}&api_key=cfedf7f80f5776d69845ed9dd0b397e3&format=json`)
                                .then(response => {
                                    if (response.ok)
                                        return response.json();
                                });
        
        const artistas = found.results.artistmatches.artist
        props.found({match: artistas, title: "Artistas encontrados"});
        
        handleSaveSearch(artista, "Artista");
  
    }

    function handleSaveSearch(value, type){
        let item = {
            value: value,
            data: (new Date()).toLocaleDateString('pt-br'),
            tipo: type
        }

        let storage = localStorage.getItem(`@squadsFy/search`);
        let lista = [];

        if (storage){
            lista = JSON.parse(storage);
            lista.push(item);
        } else {
            lista.push(item);
        }

        localStorage.setItem(`@squadsFy/search`, JSON.stringify(lista));
    }

    async function handleSearchAlbum(){
        const found = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=cfedf7f80f5776d69845ed9dd0b397e3&format=json`)
                            .then(response => {
                                if (response.ok)
                                    return response.json()
                            });

        const albuns = found.results.albummatches.album;
        props.found({match: albuns, title: "Álbuns encontrados"});

        handleSaveSearch(album, "Album");          
    }


    return (
        <div>
            {/* <Tab eventKey="artista" title="Artista">
                <Form >
                    <Form.Group>
                        <Form.Label style={{margin: "20px"}}>Buscar por artista</Form.Label>
                        <Form.Control onChange={event => setArtista(event.target.value)} placeholder="Digite o nome do artista" />
                    </Form.Group>
                    <Button id="button" onClick={handleSearchArtista}>Buscar</Button>
                </Form>
            </Tab>
            <Tab eventKey="album" title="Album">
                <Form>
                    <Form.Group>
                        <Form.Label>Buscar por album</Form.Label>
                        <Form.Control onChange={event => setAlbum(event.target.value)} placeholder="Digite o nome do album" />
                    </Form.Group>
                    <Button id="button" onClick={handleSearchAlbum}>Buscar</Button>
                </Form> 
            </Tab> */}
        </div>
    );
}

export default Search;