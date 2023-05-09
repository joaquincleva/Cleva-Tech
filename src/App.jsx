import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
