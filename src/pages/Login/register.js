import React, { useState } from 'react';
import { setUser, setAuth } from './../../services/reducers/auth';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Content from '../../components/Content';
import { GiMusicSpell } from 'react-icons/gi';

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

  async function refresh(user) {
    dispatch(setUser(user));
    dispatch(setAuth(true));
    history.push('/home');
    window.location.reload();
  }

  function validarUsuario() {
    let users = localStorage.getItem('@squadsFy/users');

    if (users == null) {
      users = [];
    } else {
      users = JSON.parse(users);
    }


    if (users.find(u => u.username === usuario)) {
      return alert("Já existe um cadastro com esse usuário");
    } else {
      register(users);
    }
  }


  return (
    <div style={{ padding: '100px 0' }}>
      <Content>
        <div className="logo" style={{ color: '#B31010' }}>
          <GiMusicSpell size={90} />
        </div>
        <div className="enterprise">
          SquadsFy
          </div>
        <form>
          <div>
            <Input type="text" placeholder="Digite seu nome" onChange={event => setNome(event.target.value)} />
          </div>
          <div>
            <Input type="text" placeholder="Defina um usuário" onChange={event => setusuario(event.target.value)} />
          </div>
          <div>
            <Input type="password" placeholder="Crie uma senha" onChange={event => setSenha(event.target.value)} />
          </div>
          <Button onClick={validarUsuario} label="Cadastro" />
        </form>
        <p>Já tem cadastro?<Link style={{ color: "#B31010" }} to="/login"> Faça o login</Link></p>
      </Content>
    </div>
  );
}

export default Register;