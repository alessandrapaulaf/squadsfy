import React from 'react';
import './list.scss';

const List = (props) =>{

  return (
    <div className="list">
      <h1>{props.title}</h1>
      <table className="rwd-table" >
          <thead>
              <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>{props.title === "Álbuns encontrados" ? "Artista" : "Ouvintes"}</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {
                  props.values.map((value, index) => {
                      return(
                          <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{value.name}</td>
                              <td>{props.title === "Álbuns encontrados" ? value.artist : value.listeners}</td>
                              <td></td>
                          </tr>
                      );
                  })
              }
          </tbody>
      </table>
    </div>
  );
}

export default List;