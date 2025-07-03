import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>

        <h2>Formulário de Contato</h2>

        <form className="form">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" placeholder="Digite seu nome" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" rows="5" placeholder="Sua mensagem..." required></textarea>

          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
