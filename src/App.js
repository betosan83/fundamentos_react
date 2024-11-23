import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
    return (
        <div className="App">
            <FirstComponent></FirstComponent>
            <TemplateExpressions></TemplateExpressions>
        </div>
    );
}

export default App;
