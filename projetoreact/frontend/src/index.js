import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Introducao from './components/introducao/Introducao.js';
import Sobre from './components/sobre/Sobre.js';
import Footer from './components/footer/Footer.js';
import Inserir from './components/inserir/Inserir';
import Navbar from './components/navbar/Navbar.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Aceita mais de um componente
  <>
  <Navbar></Navbar>
   <div className="container">
  <App />
  <Introducao></Introducao>
  <Sobre></Sobre>
{/*   <Inserir></Inserir> */}

  </div>
  <Footer></Footer>
  </>
 


  
  
);

