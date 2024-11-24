import React from "react";
import "../components/styles/propsreact.css";

const PropsReact = (props) => {
    const { nome, idade, cidade, hobbies } = props;

    const listaHobbies = hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
    ));

    return (
        <div className="container">
            <h1>Olá, {nome}!</h1>
            <p>
                Você tem {idade} anos e mora em {cidade}.
            </p>
            <h2>Hobbies:</h2>
            <ul>{listaHobbies}</ul>
        </div>
    );
};

export default PropsReact;
