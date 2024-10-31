import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




import Inicio from './Componentes/Inicio';
import Sobre from './Componentes/Sobre';

function Home() {
  return (
    <div>
      <h1>&nbsp;Holaaa, estas en el Home.</h1>
    </div>
  );
}

function App() {
  return (
<Router>
<div> 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
           <Link className="navbar-brand" to="/">Navbar</Link>
       </button>
             <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                 <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/Inicio">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Sobre">Sobre</Link>
                    </li>
                 </ul>
              </div>   
           </div>
         </nav>   

   <Routes>
  <Route path="/" element={<Home />}/>

  <Route path="/Inicio" element={<Inicio />}/>

  <Route path="/Sobre" element={<Sobre />}/>
     </Routes>

     </div>   
</Router> 


);
}

export default App; 



