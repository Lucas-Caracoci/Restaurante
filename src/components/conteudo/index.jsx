import Botoes from "../botoes";
import { useState } from "react";
import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../servicos";
import Banner from "../banner";
import Card from "../cards";
import "./style.css"
import BarraDePesquisa from "../pesquisa";

function Conteudo() {
  const [dadosFiltrados,setDadosFiltrados ] = useState(produtosEntradas)
  const [textoBuscaDigitado,setTextoBuscaDigitado ] = useState("")

  const [botaoClicado,setBotaoClicado ] = useState("Entradas")

  
  const handleBusca = (textoDigitado) =>{
    setTextoBuscaDigitado(textoDigitado)
   
    
    if (textoBuscaDigitado.length <= 1) {
      setBotaoClicado("Entradas")
      setDadosFiltrados(produtosEntradas)
      
    }else{
      textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado))
      setBotaoClicado("")
    }
  }
  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };
    return (
      <main  className=" limita">
        <Banner/>
        <Botoes 
        handleFiltro={handleFiltro}
        botaoClicado={botaoClicado}
        />
        <BarraDePesquisa
        handleBusca={handleBusca}
        textoBuscaDigitado={textoBuscaDigitado}
        />
         <h2 className="cardapio">Cardápio</h2>
        <section className="card-container">
         

          {dadosFiltrados.map((produtos) => (
            <Card 
            key={produtos.id}
            imagem={produtos.imagem}
            nome={produtos.nome}
            categoria={produtos.categoria}
            descrição={produtos.descricao}
            preço={produtos.preco}
          />
          ))}
          
        </section>
      </main>
    );
  }
  
  export default Conteudo;