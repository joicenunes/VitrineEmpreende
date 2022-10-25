import logo from './logo.svg';
import './App.css';

import { HiOutlineUserCircle, HiOutlineKey } from 'react-icons/hi2';

function App() {
  return (
    <div className="App">
      <div className="App-login-image">

      </div>
      <div className="App-login-form">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            <strong>Bem-vindo(a)!</strong>
          </p>
          <p>Entre com seu usuário e senha para acessar o sistema.</p>
          <div className="Form-item">
            <label for="username">Usuário *</label>
            <br />
            <div className="Form-item-field">
              <HiOutlineUserCircle className="Form-item-icon" />
              <input id="username" name="username" type="text" />
            </div>
          </div>
          <div className="Form-item">
            <label for="password">Senha *</label>
            <br />
            <div className="Form-item-field">
              <HiOutlineKey className="Form-item-icon" />
              <input id="password" name="password" type="password" />
            </div>
          </div>
          <div class="Form-button">
            <button>Entrar</button>
          </div>
          <div class="Form-links">
            <a href="#">Esqueceu a senha?</a>
            <br />
            Não possui uma conta? <a href="#">Criar uma.</a>
          </div>
      </div>
    </div>
  );
}

export default App;
