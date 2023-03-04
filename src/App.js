import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carteras from './Components/Carteras/Carteras';
import Home from "./Components/Home/Home";
import Mercado from './Components/Mercado/Mercado';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/mercado" element={<Mercado/>}/>
        <Route path="/carteras" element={<Carteras/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
