import { useState } from 'react';
import './App.css';


let initialState = [
  {
    id:1,
    prioridade: "1",
    titulo:"TESTE",
    descricao:"Teste 1"
  },
  {
    id:2,
    prioridade: "1",
    titulo:"TESTE",
    descricao:"Teste 2"
  }
]

function App() {

  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e){
    e.preventDefault();//previne de recarregar a página

    const atividade = {
      id:  document.getElementById('id').value,
      prioridade:  document.getElementById('prioridade').value,
      titulo:  document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    };


    ///atividades.push(atividade); 
   
   setAtividades([...atividades, { ...atividade}]);//criar a atividade
    console.log(atividades);
    //os 3 pontos indica que ao colocar um novo elemento deve criar um novo array copiado dentro do array de atividades
    //o {} cria um novo objeto ...atividade substitui o comando atividades.push(atividade); para inserir uma nova atividade
  }

   //Função para converter prioridade
   function prioridadeLabel(param){
    switch(param){
        case '1':
          return 'Baixa';
          case '2':
            return 'Normal';
            case '3':
              return 'Alta';
              default:
                return 'Não definido';
    }
  }
  //Função para converter emotes
  function prioridadeStyle(param){
    switch(param){
        case '1':
          return 'smile';
          case '2':
            return 'meh';
            case '3':
              return 'frown';
              default:
                return 'Não definido';
    }
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
        <label className="form-label">Prioridade</label>
        <select id="prioridade" className="form-select">
          <option defaultValue="0">Selecionar...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>

    <div className="col-md-6">
        <label className="form-label">
          Título
          </label>
        <input id="titulo"
         className="form-control" 
         type="text" 
         placeholder='Título'></input>
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Descrição
          </label>
        <input id="descricao"
         className="form-control" 
         type="text" 
         placeholder='Descrição'></input>
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
          <div key={ativ.id} className="card mb-2 shadow-sm" style={{width: "50rem"}}>
            <div className="card-body-teste">
              <div className="d-flex.justify-content-between">
                <h5 className="card-title-teste">
                <span className="badge bg-secondary me-1">
                  {ativ.id}
                </span>
                - {ativ.titulo}
                </h5>
                <h6>
                    
                    Prioridade:
                    <span className="ms-1 text-black">
                    <i className={"me-1 far fa-" + prioridadeStyle(ativ.prioridade)}></i>
                     {prioridadeLabel(ativ.prioridade)}
                    </span>
                   
                </h6>
              </div>
              

              <p className="card-text-teste">
              {ativ.descricao}
              </p>
              <div className="d-flex.justify-content-end pt-2 m-0 border-top">
               <button className="btn btn-sm btn-outline-primary me-2 ">
               <i className="fas fa-pen me-2"></i>
                Editar
               </button>

               <button className="btn btn-sm btn-outline-danger">
               <i className="fas fa-trash me-2"></i>
                Deletar
               </button>


              </div>
            </div>
        </div>

 


        ))}

        
          
          
    </div>
  </>
  );
}

export default App;
