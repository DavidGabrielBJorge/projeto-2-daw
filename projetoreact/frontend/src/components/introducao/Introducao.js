import { useState } from 'react';
import './introducao.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import carrousel_foto_1 from'./carrousel/Cyberpunk_foto1.jpg';
import carrousel_foto_2 from'./carrousel/Cyberpunk_foto2.jpg';
import carrousel_foto_3 from'./carrousel/Cyberpunk_foto3.jpg';

import cidade from './images/introducao/Cyberpunk_foto1.jpg';
import rua_noite from './images/introducao/Cyberpunk_foto3.jpg'
import hq_cyberpunk from './images/introducao/Cyberpunk_foto6.jpg';


function Introducao() {
  return (
  <>

    <h1>Introdução</h1>
 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carrousel_foto_1} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={carrousel_foto_2} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={carrousel_foto_3} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 


<div className="card" >
  <div className="card-body">
  <h5 className="card-title">Cyberpunk 2077</h5>
  <p className="card-text">Todos os direitos sobre o Cyberpunk 2077 são reservados. Não pode usar ou explorar nenhuma parte do Cyberpunk 2077, exceto conforme explicado no Contrato e nas Diretrizes de Conteúdo de Fãs. O Cyberpunk 2077 e seus Direitos de Propriedade Intelectual são protegidos por direitos autorais, marcas e outras leis de propriedade intelectual em todo o mundo.</p>
 
  </div>
</div>

<br></br>
<br></br>

<div className="card mb-3">
  <img src={hq_cyberpunk} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Projeto</h5>
    <p className="card-text">Esse projeto tem como objetivo auxiliar uma imobiliária fictícia no universo de Cyberpunk 2077 na organização dos proprietários e de seus imóveis.</p>
  </div>
</div>




  </>
  );
}

export default Introducao;
