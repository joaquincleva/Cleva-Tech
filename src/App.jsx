import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from "./Components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
