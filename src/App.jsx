import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CadastroForm from "./components/CadastroForm";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  const [cadastro, setCadastro] = useState([]);

  const cadastrar = async (nome, sobrenome, email, celular, cpf, logradouro, cidade_nome, senha, genero) => {
    const novoCliente = {
      nome,
      sobrenome,
      email,
      celular,
      cpf,
      endereco: {
        logradouro
      },
      cidade: {
        nome: cidade_nome
      },
      senha,
      genero
    };

    try {
      const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoCliente),
      });

      if (response.ok) {
        const data = await response.json();
        window.alert("Cliente cadastrado com sucesso:");
        setCadastro((prevCadastro) => [...prevCadastro, data]);
      } else {
        const errorData = await response.text();
        window.alert("Erro ao cadastrar cliente:", response.status, response.statusText, errorData);
      }
    } catch (error) {
      window.alert("Erro na requisição:", error);
    }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/cadastrar">Cadastro</Link>
          <Link to="/login">Login</Link>
          <Link to="/chatbot">Chatbot</Link>

        
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cadastrar" element={<CadastroForm cadastrar={cadastrar} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
