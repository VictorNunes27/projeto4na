import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Página de Login
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      // Armazene o JWT em LocalStorage ou no contexto do React
      localStorage.setItem('token', response.data.token);

      // Redirecionar ou mostrar uma mensagem de sucesso
      alert('Login bem-sucedido!');
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

// Página inicial após login
const HomePage = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <p>Você não está logado!</p>;
  }

  return (
    <div>
      <h2>Bem-vindo!</h2>
      <p>Você está logado. O token de autenticação foi salvo no LocalStorage.</p>
    </div>
  );
};

// Componente App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
