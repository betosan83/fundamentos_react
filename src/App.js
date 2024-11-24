import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Eventos from "./components/Eventos";

function App() {
    return (
        <div className="App">
            <FirstComponent></FirstComponent>
            <TemplateExpressions></TemplateExpressions>
            <Eventos></Eventos>
        </div>
    );
}

export default App;
