import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Login from './components/login/Login.js';
import Footer from './components/footer/Footer.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Aceita mais de um componente
  <>
   <div className="container">

  <Login></Login>

  </div>
  <Footer></Footer>
  </>
 


  
  
);

