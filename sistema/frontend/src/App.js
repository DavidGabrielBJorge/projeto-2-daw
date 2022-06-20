import { useState,useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/Atividades/AtividadeForm.js';
import AtividadeLista from './components/Atividades/AtividadeLista.js';
import axios from "axios";
let initialState = [
  {
    id:0,
    prioridade: "1",
    nome:"TESTE",
    cpf:"12345678911",
    endereco:"Teste 1",
    telefone:"111111111111",
    valor:"150000"
  }
 
]

function App() {

  const [index, setIndex]=useState(0);
  const [atividades, setAtividades] = useState(initialState)
  const [atividade, setAtividade] = useState({id:0})
  const [id, setId]=useState("");
  const [idAlterar, setIdAlterar]=useState("");
  const [NomeAlterar, setNomeAlterar]=useState("");
  const [cpfAlterar, setCpfAlterar]=useState("");
  const [telefoneAlterar, setTelefoneAlterar]=useState("");
  const [valorAlterar, setValorAlterar]=useState("");
  const [enderecoAlterar, setEnderecoAlterar]=useState("");

  
  useEffect(() => {
    atividades.length <= 0
        ? setIndex(1)
        : setIndex(
              Math.max.apply(
                  Math,
                  atividades.map((item) => item.id)
              ) + 1
          );
}, [atividades]);
  /* function addAtividade(e){
    e.preventDefault();//previne de recarregar a página

    const atividade = {
      id:  Math.max.apply(
        Math, atividades.map(item=> item.id)
        )+1 ,
      prioridade:  document.getElementById('prioridade').value,
      titulo:  document.getElementById('titulo').value,
      endereco: document.getElementById('endereco').value
    };


    ///atividades.push(atividade); 
   
   setAtividades([...atividades, { ...atividade}]);//criar a atividade
    console.log(atividades);
    //os 3 pontos indica que ao colocar um novo elemento deve criar um novo array copiado dentro do array de atividades
    //o {} cria um novo objeto ...atividade substitui o comando atividades.push(atividade); para inserir uma nova atividade
  } */

  function addAtividade(ativ){
   
   setAtividades([...atividades,
    { ...ativ, id: index}]);
    console.log(atividades);
    
  } 



  function cancelarAtividade(){
    setAtividade({id:0});
  }

  function atualizarAtividade(ativ){
    console.log(ativ);

    console.log(ativ.id);
    console.log(ativ.nome);
    console.log(ativ.cpf);
    console.log(ativ.telefone);
    console.log(ativ.valor);
    console.log(ativ.endereco);

    axios({
      method: "PUT",
      data:{
        id: ativ.id,
        Nome: ativ.nome,
        cpf: ativ.cpf,
        telefone: ativ.telefone,
        valor: ativ.valor,
        endereco: ativ.endereco
      },
      withCredentials:true,
      url: "http://localhost:4000/imovel"
    }).then((res)=> console.log(res));

    setAtividades(atividades.map(item => 
      item.id === ativ.id ? ativ :item
      ));
      setAtividade({id:0})
  }

  function deletarAtividade(id){
    console.log("Entrou no criar");
    axios({
      method: "DELETE",
      data:{
        id:id
      },
      withCredentials:true,
      url: "http://localhost:4000/imovel"
    }).then((res)=> console.log(res));

    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id){
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0])
  }

  
  return (
    /*
    Por ter um form e uma div é necessário utilizao a tag fragment <> </> para que coloque os dois no mesmo
    componente
    */
<>
    <AtividadeForm
    addAtividade={addAtividade}
    cancelarAtividade={cancelarAtividade}
    atualizarAtividade={atualizarAtividade}
    ativSelecionada={atividade}
    atividades={atividades}
    ></AtividadeForm>

    <AtividadeLista
    atividades={atividades}
    deletarAtividade={deletarAtividade}
    pegarAtividade={pegarAtividade}
    ></AtividadeLista>
  </>
  );
}

export default App;
