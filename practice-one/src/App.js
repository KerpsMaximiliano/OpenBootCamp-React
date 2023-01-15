import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/component_a";

function App() {
  const testData = {
    name: "MAXIMILIANO",
    surname: "KERPS",
    email: "maximilianokerps@gmail.com",
    status: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>CONTACT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={testData} />
      </header>
    </div>
  );
}

export default App;
