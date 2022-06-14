import { useState } from 'react';
import './inserir.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';

function Inserir() {
   
    
  return (

    
  <>

        
    {/*    =======================INPUT======================= */}
          <div className="mb-3">
            <label className="form-label">Digite o seu nome:</label>
            <input type="text" id="Nome" name="Nome" value="" className="form-control" placeholder="Fulano Ciclano"></input>
          </div>

          <div className="mb-3">
            <label className="form-label" >Digite o seu cpf:</label>
            <input type="text" id="cpf" name="cpf" value="" className="form-control" placeholder="123.456.789-11"></input>
          </div>

          <div className="mb-3">
            <label className="form-label" >Digite o seu telefone:</label>
            <input type="text" id="telefone" name="telefone" value="" className="form-control" placeholder="11912345678"></input>
          </div>

          <br></br>
          <div className="mb-3">
            <label className="form-label">Digite o endereço do seu imóvel:</label>
            <textarea type="text" id="endereco" name="endereco" value="" className="form-control" rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Digite o valor do imóvel:</label>
            <textarea type="number" id="valor" name="valor" value="" className="form-control" rows="3"></textarea>
          </div>

          <button className="btn btn--secondary"
           value="Enviar"
           onClick="Imoveis.add()">
            <span className="btn__content">Inserir</span>
          </button>

        <div className="form_buscar">
            <h1>Procurar imóvel:</h1>
            <br></br>
                <form id="search" > 
                    <input id="endereco-search" type="text" name="endereco-search" value="" style={{width: "80%",borderStyle: "5px solid"}}/>

                    <input type="button" 
                    value ="Buscar"  
                    onClick="Imoveis.findAll()"/>
                </form> 
        </div>

        <br></br>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th scope="col">Endereço</th>
              <th scope="col">Preço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody id="tabela">
           
           
           
          </tbody>
        </table>

        <section>
           
           
            <div id="comments">

            </div>

        </section>


  </>
  );
}

export default Inserir;
