import "./style.css"
function Card({ imagem, nome, categoria, descrição, preço }) {
  return (

    <div className="card">
      <figure className="fig">
        <img src={imagem} alt='' />
      </figure>
      
      <div className="card-texto">
        <h3>{nome}</h3>
        <span className="categoria">{categoria}</span>
        <p>{descrição}</p>
        <span className="preco">{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(preço)}</span>
      </div>
    </div>

  );
}

export default Card;