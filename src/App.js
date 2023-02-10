import './App.css';
import { Theme } from "./context/Theme";
import Home from "./pages/Home";


function App() {
    return (
        <Theme.Provider>
            <div className={"light"}>
                <div className={"body"}>
                    <Home />
                </div>
            </div>
        </Theme.Provider>
    );
}

export default App;
