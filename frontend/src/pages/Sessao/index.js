import "./styles.css";

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import api from "../../services/api";

import background from "../../assets/background.png";

export default function Logon() {
  const userLogin = localStorage.getItem("userLogin");

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push("/Login");
  }

  async function getConta() {
    const conta = await api.get("conta", userLogin);

    alert("teste");
  }

  return (
    <div className="profile-container">
      <section className="form"></section>
      <form onSubmit={getConta}>
        <h1>Welcome</h1>
        <h1>Saldo: {}</h1>
        <Link className="back-link" to="/">
          <button onClick={handleLogout} type="button"></button>
          <FiLogOut size={16} color="#938cc3" />
          Log Out
        </Link>

        <button className="button" type="submit">
          Login
        </button>
      </form>
      <img src={background} alt="background" />
    </div>
  );
}
