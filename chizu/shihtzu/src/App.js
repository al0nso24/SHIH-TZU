import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Inicio from './Inicio';
import Historia from './Historia';
import Caracteristicas from './Caracteristicas';
import Alimentacion from './Alimentacion';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path='/historia' element={<Historia></Historia>}></Route>
        <Route path='/caracteristica' element={<Caracteristicas></Caracteristicas>}></Route>
        <Route path='/alimentacion' element={<Alimentacion></Alimentacion>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
