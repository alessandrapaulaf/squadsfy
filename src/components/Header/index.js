import React from 'react';
import './header.scss';
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
        <nav>
          <div class="container">
            <ul className="left">
              {
                local === "/historico" &&
                <li><Link to="/" ><span className="home"></span> Home</Link></li>
              }
              {
                (local === "/home" || local === "/") &&
                <li><Link to="/historico"><span className="historico"></span> Historico</Link></li>
              }
              <li><span onClick={logoff}>Sair</span></li>
            </ul>
          </div>
        </nav>
      </header>
      { props.children }
    </div>
  );
}

export default Header;