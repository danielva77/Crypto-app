import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carteras from './Components/Carteras/Carteras';
import Home from "./Components/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/carteras" element={<Carteras/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
