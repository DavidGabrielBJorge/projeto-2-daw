import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Introducao from './components/introducao/Introducao.js';
import Sobre from './components/sobre/Sobre.js';
import Footer from './components/footer/Footer.js';
import Navbar from './components/navbar/Navbar.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Aceita mais de um componente
  <>
  <Navbar></Navbar>
   <div className="container">
  <Introducao></Introducao>
  <Sobre></Sobre>

  </div>
  <Footer></Footer>
  </>
 


  
  
);

