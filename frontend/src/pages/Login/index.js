import "./styles.css";

import React, { useState, Component } from "react";

import { Link , useHistory } from "react-router-dom";

import background from "../../assets/background.png";

import api from "../../services/api";

export default function Register() {
  const [conta, setConta] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      conta,
      senha
    };

    try {
      const response = await api.post("session", data);

      localStorage.setItem("userLogin", conta);

      history.push("/Sessao");

      alert("Sucesso")
      
    } catch (error) {
      alert(
        "Conta ou Senha incorreta."
      );
    }
  }

  return (
    <div className="register-container">
      <section className="form"></section>

      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <input
          placeholder="Conta"
          value={conta}
          onChange={(e) => setConta(e.target.value)}
        />

        <input
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
      <img src={background} alt="background" />
    </div>
  );
}
