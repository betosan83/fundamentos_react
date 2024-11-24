import React from "react";
import "../components/styles/conditionalrender.css";

const ConditionalRender = () => {
    const [isLogged, setIsLogged] = React.useState(false);
    const [showButton, setShowButton] = React.useState(false);

    const handleLogin = () => {
        setIsLogged(true);
        setShowButton(true);
    };

    const handleLogout = () => {
        setIsLogged(false);
        setShowButton(false);
    };

    return (
        <div className="container">
            <h1>Renderização condicional</h1>
            <div className="content">
                {isLogged ? (
                    <div>
                        <p>Bem-vindo, usuário!</p>
                    </div>
                ) : (
                    <div>
                        <p>Por favor, faça login.</p>
                        <button onClick={handleLogin}>Entrar</button>
                    </div>
                )}
                {showButton && <button onClick={handleLogout}>Sair</button>}
            </div>
        </div>
    );
};

export default ConditionalRender;
