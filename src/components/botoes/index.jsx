import "./style.css"
export default function Botoes({handleFiltro,botaoClicado}){
    
    return(
        <section className="section-botoes">
            
            <div className="container-botoes">
                <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Entradas")} >
                    <img className="imgBtn" src='/Assets/entrada.png' alt=''/>
                    <span>Entradas</span>
                </button>
                <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}  onClick={() => handleFiltro("Massas")} >
                    <img className="imgBtn" src='/Assets/massa.png' alt=''/>
                    <span>Massas</span>
                </button>
                <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Carnes")} >
                    <img className="imgBtn" src='/Assets/carne.png' alt=''/>
                    <span>Carnes</span>
                </button>
                <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Bebidas")} >
                    <img className="imgBtn" src='/Assets/bebidas.png' alt=''/>
                    <span>Bebidas</span>
                </button>
                <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Saladas")} >
                    <img className="imgBtn" src='/Assets/salada.png' alt=''/>
                    <span>Saladas</span>
                </button>
                <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}  onClick={() => handleFiltro("Sobremesas")}>
                    <img className="imgBtn" src='/Assets/sobremesa.png' alt=''/>
                    <span>Sobremesas</span>
                </button>
                
            </div>
        </section>
    )
}
