import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setAuth } from '../../services/reducers/auth';
import history from '../../services/history';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Content from '../../components/Content';

const Login = () => {
  const [usuario, setusuario] = useState("");
  const [senha, setSenha] = useState("");
  const dispatch = useDispatch();

  function login() {
    let users = localStorage.getItem('@squadsFy/users');

    if(users){
      users = JSON.parse(users);
    } else {
      users = [];
    }

    let userAuth = users && users.find(u => u.username === usuario);

    if (userAuth) {
      if (userAuth.senha === senha) {
        dispatch(setUser(userAuth));
        dispatch(setAuth(true));
        history.push('/home');
      } else {
          return alert("Usuário ou senha incorretos");
      }
    } else {
        return alert("Usuário ou senha incorretos");
    }
  }


  return (
    <div>
      <div style={{padding: '200px 0'}}>
        <Content>
          <div>
            
          </div>
          <form>
            <div>
              <Input type="text" placeholder="Usuário" onChange={event => setusuario(event.target.value)}/>
            </div>
            <div>
              <Input type="password" placeholder="Senha" onChange={event => setSenha(event.target.value)}/>
            </div>
            <Button onClick={login} label="Login"/>
          </form>
          <p>Não tem login?<Link to="/register"> Cadastre-se</Link></p>
        </Content>
      </div>
    </div>
  );
}

export default Login;