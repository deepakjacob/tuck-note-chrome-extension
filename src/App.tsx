import logo from "./logo.svg";
import "./App.css";
import * as AssetsService from "./services/assets-service";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={AssetsService.getResourceURL(logo)}
          className="App-logo"
          alt="logo"
        />
        <p>
          Tuck Note, edit <code>src/App.tsx</code> and save to reload.
        </p>
      
      </header>
    </div>
  );
}

export default App;
