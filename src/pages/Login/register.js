import React, { useState } from 'react';
import { setUser, setAuth } from './../../services/reducers/auth';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Register = () => {
  const [usuario, setusuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const dispatch = useDispatch();

  function register(users) {
    let newUsuario = {
      nome: nome,
      username: usuario,
      senha: senha
    };

    users.push(newUsuario);
    localStorage.setItem('@squadsFy/users', JSON.stringify(users));
    refresh(newUsuario);
  }

  async function refresh(user){
    dispatch(setUser(user));
    dispatch(setAuth(true));
    history.push('/home');
    window.location.reload();
  }

  function validarUsuario(){
    let users = localStorage.getItem('@squadsFy/users');

    if (users == null){
      users = [];
    } else {
      users = JSON.parse(users);
    }
      

    if (users.find(u => u.username === usuario)){
      return alert("Já existe um cadastro com esse usuário");
    } else {
      register(users);
    }
  }


  return (
    <div>
      <div>

      </div>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" onChange={event => setNome(event.target.value)}></input>
        </div>
        <div>
          <label>Usuário</label>
          <input type="text" placeholder="Defina um usuário" onChange={event => setusuario(event.target.value)}></input>
        </div>
        <div>
          <label>Senha</label>
          <input type="password" onChange={event => setSenha(event.target.value)}></input>
        </div>
        <button onClick={validarUsuario}>Cadastro</button>
      </form>
      <Link to="/login">Já tem cadastro? Faça o login</Link>
    </div>
  );
}

export default Register;