import { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


function Login() {

  return (
   
  <>

    
    <div>
    <h1 >Digite os dados do seu login: </h1>
    
    <br></br>
    <form method="post" action="/login">
      <div className="mb-3">
        <label className="form-label">Login:</label>
        <input type="text" name="login"  className="form-control"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input type="password" className="form-control" name="password"></input>
      </div>
     
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    <br></br>
    
    <a href="http://localhost:3000/">
    <button className="btn btn-secondary" >Voltar ao início</button>
    </a>
    </div>

  </>
  );
}

export default Login;
