import { useState,useEffect } from 'react'
import AtividadeLista from './AtividadeLista';
import axios from "axios";

const atividadeInicial={
  id:0,
  nome:"",
  cpf:"",
  prioridade:0,
  endereco:"",
  telefone:"",
  valor:"",
  preco:""
}

export default function AtividadeForm(props){
  const [atividade,setAtividade]=useState(atividadeAtual());
  const [Nome, setNome]=useState("");
  const [cpf, setCpf]=useState("");
  const [telefone, setTelefone]=useState("");
  const [valor, setValor]=useState("");
  const [endereco, setEndereco]=useState("");
 /*  const [preco, setPreco]=useState(""); */

  const criar = (e) => {
    console.log("Entrou no criar");
    axios({
      method: "POST",
      data:{
        Nome: Nome,
        cpf: cpf,
        telefone: telefone,
        valor: valor,
        endereco: endereco
      },
      withCredentials:true,
      url: "http://localhost:3002/imovel"
    }).then((res)=> console.log(res));

  }


  useEffect(()=>{//ao construir um componente o useEffect eh executado apenas uma vez
    if(props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada);
      
  }, [props.ativSelecionada]);

   const inputTextHandler = (e) =>{
    const {name,value} = e.target;
    console.log(value);
    console.log(e.target);

    setAtividade({...atividade, [name]:value})
     
  }; 

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(props.ativSelecionada.id !== 0){
      props.atualizarAtividade(atividade);
    }
    else{
      props.addAtividade(atividade);
    }

    setAtividade(atividadeInicial);

  }

  const handleCancelar = (e) =>{
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  }

  function atividadeAtual(){
    if(props.ativSelecionada.id !== 0){
      return props.ativSelecionada;
    }
    else{
      return atividadeInicial;
    }
  }
    return(
      <>
        <h1>Imóvel {atividade.id !==0 ? atividade.id : ''}</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
        
{/*============================= Inputs dos dados =============================*/}
        <div className="col-md-6">
            <label className="form-label">
              Nome
              </label>
            <input 
             name="nome"
             value={atividade.nome}
             /* onChange={inputTextHandler} */
              onChange={e => {inputTextHandler(e); setNome(e.target.value)}} 
             id="nome"
             className="form-control" 
             type="text" 
             placeholder='Fulano Ciclano'></input>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              CPF
              </label>
            <input 
             name="cpf"
             value={atividade.cpf}
             onChange={e => {inputTextHandler(e); setCpf(e.target.value)}} 
             /* onChange={e => {inputTextHandler(); setCpf(e.target.value)}} */
             id="cpf"
             className="form-control" 
             type="text" 
             placeholder='12345678911'></input>
          </div>

          <div className="col-md-6">
            <label className="form-label">
            Telefone  
            </label>
            <input 
             name="telefone"
             value={atividade.telefone}
             onChange={e => {inputTextHandler(e); setTelefone(e.target.value)}} 
             /* onChange={e => {inputTextHandler(); setTelefone(e.target.value)}} */
             id="telefone"
             className="form-control" 
             type="text" 
             placeholder='99912345678'></input>
          </div>

          <div className="col-md-6">
            <label className="form-label">
            Valor  
            </label>
            <input 
             name="valor"
             value={atividade.valor}
             onChange={e => {inputTextHandler(e); setValor(e.target.value)}} 
            /*  onChange={e => {inputTextHandler(); setValor(e.target.value)}} */
             id="valor"
             className="form-control" 
             type="text" 
             placeholder='200000,00'></input>
          </div>

          <div className="col-md-6">
            <label className="form-label">Prioridade</label>
            <select 
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}
            id="prioridade" 
            className="form-select">
              <option defaultValue="0">Selecionar...</option>
              <option value="1">Baixa</option>
              <option value="2">Normal</option>
              <option value="3">Alta</option>
            </select>
          </div>

{/*==========================teste ==========================*/}
            

    
          <div className="col-md-12">
            <label className="form-label">
              Endereço
              </label>
            <textarea
             name="endereco"
             value={atividade.endereco}
             onChange={e => {inputTextHandler(e); setEndereco(e.target.value)}} 
             /* onChange={e => {inputTextHandler(); setEndereco(e.target.value)}} */
             id="endereco"
             className="form-control" 
             type="text" 
             placeholder='St. Juliet, Center, 302'></textarea>
          </div>
          
          <hr/>
    
        <div className="col-12">
        {
          atividade.id ===0 ? //se o id for 0 soh aparece o botao de criar
          <button 
          className="btn btn-outline-secondary "
          type="submit"
           onClick={criar} 
        >
          <i className="fas fa-plus me-2"></i>
          Imóvel
        </button>  
        :
        <>
          <button 
            className="btn btn-outline-success me-2 " type="submit">
            <i className="fas fa-plus me-2"></i>
            Salvar
          </button>  

          <button 
            className="btn btn-outline-warning "
            onClick={handleCancelar}
          >
            <i className="fas fa-plus me-2"></i>
            Cancelar
          </button>  
        
        </>
        }
        </div>
    
          
    
        </form>
        </>
    )
}