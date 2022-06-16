import { useState,useEffect } from 'react'
import AtividadeLista from './AtividadeLista';

const atividadeInicial={
  id:0,
  nome:"",
  cpf:"",
  prioridade:0,
  endereco:"",
  telefone:"",
  valor:""
}

export default function AtividadeForm(props){
  const [atividade,setAtividade]=useState(atividadeAtual());

  useEffect(()=>{//ao construir um componente o useEffect eh executado apenas uma vez
    if(props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada);
      
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) =>{
    const {name,value} = e.target;

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
        <h1>Atividade {atividade.id !==0 ? atividade.id : ''}</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
        
{/*============================= Inputs dos dados =============================*/}
        <div className="col-md-6">
            <label className="form-label">
              Nome
              </label>
            <input 
             name="nome"
             value={atividade.nome}
             onChange={inputTextHandler}
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
             onChange={inputTextHandler}
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
             onChange={inputTextHandler}
             id="telefone"
             className="form-control" 
             type="text" 
             placeholder='Fulano Ciclano'></input>
          </div>

          <div className="col-md-6">
            <label className="form-label">
            Valor  
            </label>
            <input 
             name="valor"
             value={atividade.valor}
             onChange={inputTextHandler}
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
    
    
          <div className="col-md-12">
            <label className="form-label">
              Endereço
              </label>
            <textarea
             name="endereco"
             value={atividade.endereco}
             onChange={inputTextHandler}
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
        >
          <i className="fas fa-plus me-2"></i>
          Atividade
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