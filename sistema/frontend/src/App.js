import { useState,useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/Atividades/AtividadeForm.js';
import AtividadeLista from './components/Atividades/AtividadeLista.js';
import axios from "axios";
let initialState = [
  {
    id:0,
    prioridade: "1",
    nome:"Mascus Phenix",
    cpf:"67545678911",
    endereco:"Rua do Nascer do Sol - Apartamento 345",
    telefone:"445578123672",
    valor:"149999.99"
  }
 
]

function App() {

  const [index, setIndex]=useState(0);
  const [atividades, setAtividades] = useState(initialState)
  const [atividade, setAtividade] = useState({id:0})
  const [id, setId]=useState("");//-> altera o estado de uma variável
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
  
  function addAtividade(ativ){
   
    //...atividades eh um array que armazena o array de atividades
    //operator ... funciona de forma similar com o push( adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array)
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
      url: "http://localhost:3002/imovel"
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
      url: "http://localhost:3002/imovel"
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
