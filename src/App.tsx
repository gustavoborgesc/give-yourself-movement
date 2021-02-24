import Button from "./components/Button";
import ExperienceBar from "./components/ExperienceBar";
import "./styles/global.css";

export default function App() {
    return (
        <div className="container">
            <ExperienceBar percent={50} />

            <h1>Hello G.YS.M, or M.YS?!</h1>

            <Button color="red">Teste</Button>
            <Button color="green">Teste</Button>
            <Button color="blue">Teste</Button>
        </div>
    );
}
