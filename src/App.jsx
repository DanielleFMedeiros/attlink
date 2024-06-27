import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CadastroForm from "./components/CadastroForm";
import Login from "./components/Login";

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
          <Link to="/">Cadastro</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CadastroForm cadastrar={cadastrar} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
