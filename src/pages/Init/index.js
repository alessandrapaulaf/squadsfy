import React from 'react';
import Login from './../Login';
import Player from './../Player';
import { useSelector } from 'react-redux';

function Init(){
  let auth = useSelector(state => state.autenticado);

  return (
    <div>
      {
        auth === false 
        ?
          <Login/>
        :
          <Player/>
      }
    </div>
  );
}

export default Init;