import React, { useState } from "react";
import "../components/styles/eventos.css";
const Eventos = () => {
    const [mensagens, setMensagens] = useState([]);
    const handleClick = () => {
        setMensagens([...mensagens, "Clicou no botão!"]);
    };

    const handleDoubleClick = () => {
        setMensagens([...mensagens, "Clicou duas vezes no botão!"]);
    };

    const handleMouseDown = () => {
        setMensagens([...mensagens, "Pressionou o botão!"]);
    };

    const handleMouseUp = () => {
        setMensagens([...mensagens, "Soltou o botão!"]);
    };

    const handleInputChange = (e) => {
        setMensagens([...mensagens, `Digitou: ${e.target.value}`]);
    };

    return (
        <div className="container">
            <h1>Eventos</h1>
            <button onClick={handleClick}>Clique aqui!</button>
            <button onDoubleClick={handleDoubleClick}>
                Clique duas vezes aqui!
            </button>
            <button onMouseDown={handleMouseDown}>Pressione aqui!</button>
            <button onMouseUp={handleMouseUp}>Solte aqui!</button>
            <div className="input-container">
                <input type="text" onChange={handleInputChange} />
            </div>
            <div className="mensagens-container">
                <h2>Mensagens</h2>
                <ul>
                    {mensagens.map((mensagem, index) => (
                        <li key={index}>{mensagem}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Eventos;
