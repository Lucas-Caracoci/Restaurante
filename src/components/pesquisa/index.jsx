import "./style.css"
export default function BarraDePesquisa({ textoBuscaDigitado, handleBusca }){
    return(
        <div className="container-pesquisa">
            <label for="pesquisa"><img src='assets/lupa.png' alt='' for="pesquisa"/> </label>
            
            <input type="text" id="pesquisa" name="pesquisa" value={textoBuscaDigitado} onChange={(event) => handleBusca(event.target.value)} placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
        </div>
    )
}