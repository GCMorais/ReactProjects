import {useState} from 'react';
import './components/style.css';

import api from './services/api';

function App() {

  const [input,setInput] = useState ('');
  const [cep,setCep] = useState({});

  async function handSearch(){
    if(input === ''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }catch{
      alert("Erro ao buscar");
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="titulo"> Buscador de Cep</h1>

      <div className="containerInput">

        <input type="text" placeholder="Digite seu cep..." value={input} onChange={(event) => setInput(event.target.value)}/>

        <button className="buttonSearch" onClick={handSearch}>Pesquisar</button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="containerText">
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade} - {cep.uf}</span>
        </div>
      )}
    </div>
  );
}

export default App;
