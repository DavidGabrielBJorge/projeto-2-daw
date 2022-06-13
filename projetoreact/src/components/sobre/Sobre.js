import { useState } from 'react';
import './sobre.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import carro_solitario from './images/sobre/Cyberpunk_foto4.jpg';
import cyberpunk_gif from './images/sobre/Cyberpuk_GIF.gif';
import johnny from './images/sobre/keanu-reeves-glasses-off.gif';
import carla from './images/sobre/cyberpunk2077-cyberpunk.gif'
import apartamento1 from './images/sobre/Apartamento_1.png'
import apartamento2 from './images/sobre/Apartamento_2.jpg'
import apartamento3 from './images/sobre/Apartamento_3.png'
import apartamento4 from './images/sobre/Apartamento_4.png'


function Sobre() {
  return (
  <>
<h1> Sobre </h1>

{/* <=======================IMAGE OVERLAY======================= */}
<div className="card bg-dark text-white">

  <img src={carro_solitario} className="card-img" alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title">"Você prefere viver em paz como Sr. Ninguém ou cair para sempre em um incêndio de glória"</h5>
    <p className="card-text"></p>
  </div>

</div>
<br></br>

{/* =======================2 CARDS======================= */}
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <div className="card-body" >
        <h5 className="card-title">Cidade</h5>
        <p className="card-text">Night City é uma megacidade americana localizada no Estado Livre da Califórnia do Norte, controlada por corporações – legislações locais e nacionais não têm efeito na região. Existe um conflito interno constante entre gangues e outras entidades que procuram dominar a cidade. Night City depende da robótica para todos os aspectos diários como coleta de resíduos, manutenção e transportes públicos. A internet é administrada pelo exército e corporações.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <div className="card-body" >
        <h5 className="card-title">Situação social</h5>
        <p className="card-text"> Após um colapso econômico em algum momento do início do século 21, os Estados Unidos são forçados a depender de grandes corporações para sobreviver. Essas corporações lidam em uma ampla gama de áreas, como armas, robótica, cibernética, farmacêutica, comunicações e biotecnologia; muitas dessas empresas operam acima da lei.</p>
      </div>
    </div>
  </div>
  

  <div className="div-cyberpunk">
    <img className="carro-gif" src={cyberpunk_gif} alt="" ></img>
  </div>
  
</div>
<br></br>
<h1> Imobiliária </h1>

{/* =======================ACCORDION======================= */}
<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"  >
        <strong>Nossa história</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
       No ano de 2040 os irmãos Jonnhy Silverhand e Carla Silverhand ficaram órfãos após seus pais serem assassinados por [REDACTED], portanto herdaram sua empresa e juntos decidiram expandir e melhorar o mercado de imóveis de Night City que enfrentava uma crise nunca antes vista, continuando o legado da sua famlía.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" >
        <strong>Nossa Missão</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        A Imobiliária Night City atua na prestação de serviços de administração para locação e intermediação para a compra e venda de imóveis, destacando-se pela ética, transparência, adaptabilidade e inovação.
        Mantém uma destacada liderança em desempenho e é reconhecida pela sua solidez e confiabilidade.
      </div>
    </div>
  </div>
 
</div>
<br></br>

{/* =======================2 CARDS======================= */}
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col" >

    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={johnny} className="img-fluid rounded-start" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body-jonnhy">
            <h5 className="card-title">Jonnhy Silverhand</h5>
            <p className="card-texty">"A pessoa que estava me impedindo de minha felicidade era eu."</p>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>

   <div className="col">

    <div className="card-carla mb-3" >
      <div className="row g-0" >
        <div className="col-md-4" >
          <img src={carla} className="img-fluid rounded-start" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body-carla">
            <h5 className="card-title">Carla Silverhand</h5>
            <p className="card-text" >"Nunca fui de ficar parado, nasci nômade, e ainda sou nômade e sempre serei."</p>
          </div>
        </div>
      </div>
    </div>
    
    </div> 

  </div>

  <br></br>
    <h1>Imóveis</h1>


    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={apartamento1} className="card-img-top" alt="..."></img>
      <div className="card-body-sobre">
        <h5 className="card-title">Well Spring</h5>
        <p className="card-text">Preço: 150.000 Eurodólares</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={apartamento2} className="card-img-top" alt="..."></img>
      <div className="card-body-sobre">
        <h5 className="card-title">Vista del Rey</h5>
        <p className="card-text">Preço: 130.000 Eurodólares</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={apartamento3} className="card-img-top" alt="..."></img>
      <div className="card-body-sobre">
        <h5 className="card-title" >Kabuki</h5>
        <p className="card-text" >Preço: 250.000 Eurodólares</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={apartamento4} className="card-img-top" alt="..."></img>
      <div className="card-body-sobre" >
        <h5 className="card-title">Arroyo</h5>
        <p className="card-text">Preço: 325.500 Eurodólares</p>
      </div>
    </div>
  </div>
</div>

<br></br>
  </>
  );
}

export default Sobre;
