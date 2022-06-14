import { useState } from 'react';
import './App.css';


let initialState = [
  {
    id:1,
    descricao:"Teste 1"
  },
  {
    id:2,
    descricao:"Teste 2"
  }
]

function App() {

  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e){
    e.preventDefault();//previne de recarregar a página

    const atividade = {
      id:  document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    };

    ///atividades.push(atividade); 
   
   setAtividades([...atividades, { ...atividade}]);//criar a atividade
    console.log(atividades);
    //os 3 pontos indica que ao colocar um novo elemento deve criar um novo array copiado dentro do array de atividades
    //o {} cria um novo objeto ...atividade substitui o comando atividades.push(atividade); para inserir uma nova atividade
  }

  return (
    /*
    Por ter um form e uma div é necessário utilizao a tag fragment <> </> para que coloque os dois no mesmo
    componente
    */
<>
    <form className="row g-3">
    <div className="col-md-6">
        <label className="form-label">ID</label>
        <input id="id" className="form-control" type="text" placeholder='ID'></input>
      </div>
    <div className="col-md-6">
        <label className="form-label">Descrição</label>
        <input id="descricao" className="form-control" type="text" placeholder='Descrição'></input>
      </div>
      
      <hr/>

    <div className="col-12">
    <button 
        className="btn btn-outline-secondary "
        onClick={addAtividade}
      >
        + Atividade
      </button>  
    </div>

      

    </form>

    <div className="mt-3">
        {atividades.map(ativ => (

          //Precisa da key, pois para fazer uma lista no React cada item precisa de uma key
          <div key={ativ.id} className="card mb-2 shadow-sm" style={{width: "18rem"}}>
            <div className="card-body">
              <p className="card-text">
              {ativ.id} - {ativ.descricao}
              </p>
            </div>
        </div>

 


        ))}

        
          
          
    </div>
  </>
  );
}

export default App;
