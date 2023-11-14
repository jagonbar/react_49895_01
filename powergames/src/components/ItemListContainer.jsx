import { juegos } from "/data/juegos.js"
import Item from "./Item.jsx"
export default function ItemListContainer() {
  
    const itemParsed=[]
    for(let j of juegos){
        itemParsed.push(<Item key={j.id} nombre_juego={j.titulo} imagen={j.imagen} precio={j.precio} descripcion={j.descripcion} id={j.descripcion} data="data-lala=123" />)
    }
    return (
    
    <main>
            <div className="games__title">
                <h1>Los JUEGOS geniales que tenemos para ti</h1>
            </div>
            <div className="games__content">
                <div className="games__options">
                    <p className="games__options__option">
                        <input type="checkbox" name="NSWITCH" id="NSWITCH" data-tipo="switch" className="checkFiltro" defaultChecked/>
                        <label htmlFor="NSWITCH"> NINTENDO SWITCH</label>
                    </p>
                    <p className="games__options__option">
                        <input type="checkbox" name="PS" id="PS" data-tipo="playstation" className="checkFiltro" defaultChecked/>
                        <label htmlFor="PS"> PlayStation </label>
                    </p>
                    <p className="games__options__option">
                        <input type="checkbox" name="XBOX" id="XBOX" data-tipo="xbox" className="checkFiltro" defaultChecked/>
                        <label htmlFor="XBOX"> XBOX </label>
                    </p>
                    <p className="games__options__option">
                        <input type="checkbox" name="PC" id="PC" data-tipo="pc" className="checkFiltro" defaultChecked/>
                        <label htmlFor="PC"> PC </label>
                    </p>
                </div>
                <div className="games__list">
                    {itemParsed}                    
                </div> {/* ./games__list */}
            </div> {/* ./games__content */}
        </main>
  )
}