import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Footer from './components/footer/Footer.js';
import Navbar from './components/navbar/Navbar.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Aceita mais de um componente
  <>
  <Navbar></Navbar>
   <div className="container">
  <App />



  </div>
  <Footer></Footer>
  </>
 


  
  
);

