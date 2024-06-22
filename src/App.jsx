import { useState } from "react";
import "./App.css";
import CadastroForm from "./components/CadastroForm";

function App() {
  const [cadastro, setCadastro] = useState([]);

  const cadastrar = async (nome, sobrenome, email, celular, cpf, logradouro, cidade_nome, senha, genero) => {
    // Monta o objeto no formato correto
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
        // Atualiza o estado com o novo cliente
        setCadastro((prevCadastro) => [...prevCadastro, data]);
      } else {
        // Log de erro com detalhes
        const errorData = await response.text();
        window.alert("Erro ao cadastrar cliente:", response.status, response.statusText, errorData);
      }
    } catch (error) {
      window.alert("Erro na requisição:", error);
    }
  };

  return (
    <div className="app">
      <CadastroForm cadastrar={cadastrar} />
    </div>
  );
}

export default App;
