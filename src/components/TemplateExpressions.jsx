const TemplateExpressions = () => {
    const nome = "João";
    const idade = 30;

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <p>Você tem {idade} anos.</p>
            <p>
                {idade >= 18
                    ? "Você é maior de idade"
                    : "Você é menor de idade"}
            </p>
            <p>{nome.toUpperCase()}</p>
            <p>{nome.toLowerCase()}</p>
        </div>
    );
};

export default TemplateExpressions;
