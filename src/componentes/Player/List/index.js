import React, { useEffect, useState } from 'react';
import { Table } from  'react-bootstrap';
import './../../../css/list.css';

const List = (props) =>{

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>{props.tipo == "Álbuns encontrados" ? "Artista" : "Ouvintes"}</th>
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
                                <td>{props.tipo == "Álbuns encontrados" ? value.artist : value.listeners}</td>
                                <td></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    );
}

export default List;