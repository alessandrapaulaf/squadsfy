import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../services/reducers/auth';
import history from '../../services/history';

function Header(props) {
  const dispatch = useDispatch();
  const local = window.location.pathname;

  function logoff() {
    dispatch(setAuth(false));
    history.push('./');
    window.location.reload();
  }

  return (
    <div>
      <header>
        <div>
          <nav className="mr-auto">
            {
              local === "/historico" &&
              <Link to="/home">Home</Link>
            }
            {
              local === "/home" &&
              <Link to="/historico">Historico</Link>
            }
            <div onClick={logoff}>Sair</div>
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
}

export default Header;