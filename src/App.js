import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="Appinfo">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
