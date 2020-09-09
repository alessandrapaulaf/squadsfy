import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

const Historico = () => {
  const [buscas, setBuscas] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('@squadsFy/search')
    const result = JSON.parse(storage);
    if (result) {
      setBuscas(result);
    }
  }, []);


  return (
    <Header>
      {
        buscas.length > 0
        ?
        <table hover className="historico">
          <thead>
            <tr>
              <th>Nome buscado</th>
              <th>Data da busca</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {
              buscas.map((busca) => {
                return (
                  <tr>
                    <td>{busca.value}</td>
                    <td>{busca.data}</td>
                    <td>{busca.tipo}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        :
        <h1>Nenhuma busca realizada.</h1>
      }
    </Header>
  );
}

export default Historico;