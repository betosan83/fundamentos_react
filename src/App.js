import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Eventos from "./components/Eventos";
import ConditionalRender from "./components/ConditionalRender";
import PropsReact from "./components/PropsReact";

function App() {
    const pessoa = {
        nome: "João Pedro",
        idade: 25,
        cidade: "Rio de Janeiro",
        hobbies: ["Futebol", "Música", "Leitura", "Programação"],
    };
    return (
        <div className="App">
            <FirstComponent></FirstComponent>
            <TemplateExpressions></TemplateExpressions>
            <Eventos></Eventos>
            <ConditionalRender></ConditionalRender>
            <PropsReact
                nome={pessoa.nome}
                idade={pessoa.idade}
                cidade={pessoa.cidade}
                hobbies={pessoa.hobbies}
            ></PropsReact>
        </div>
    );
}

export default App;
