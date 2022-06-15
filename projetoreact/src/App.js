import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/Atividades/AtividadeForm.js';
import Atividade from './components/Atividades/Atividade.js'
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

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  
  return (
    /*
    Por ter um form e uma div é necessário utilizao a tag fragment <> </> para que coloque os dois no mesmo
    componente
    */
<>
    <AtividadeForm
    addAtividade={addAtividade}
    atividades={atividades}
    ></AtividadeForm>

    <div className="mt-3">
        {atividades.map(ativ => (

         <Atividade 
         key={ativ.id}
         ativ={ativ}
         deletarAtividade={deletarAtividade}>
         </Atividade>

 


        ))}

        
          
          
    </div>
  </>
  );
}

export default App;
