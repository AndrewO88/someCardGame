import './App.css';
import HomeComponent from "./components/homeComponent/homeComponent";
import {StateProvider} from './context/context'

function App() {
    return (
        <div className="App">
            <StateProvider>
                <HomeComponent/>
            </StateProvider>

        </div>
    );

}

export default App;
