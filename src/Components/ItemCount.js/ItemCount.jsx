import { useState } from "react"
import "./ItemCount.css"
import iconoCarritoColor from "./iconoCarritoColor.png"

const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)
    const aumentar = () => {
        if(cantidad<stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminuir = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }
    const onAdd = () => {
        if(cantidad>stock){
            alert("No hay suficientes productos en stock")
        } else {
            alert("Item agregado al carrito")
        }
    }
    return (
        <div className="agregarCarrito">
            <button onClick={disminuir} className="botonStock">-</button>
            <span className="quantity">{cantidad}</span>
            <button onClick={aumentar} className="botonStock">+</button>
            <button onClick={onAdd} disabled={!stock} className="botonCarrito">
                <img className="imagenCarrito" src={iconoCarritoColor} width={30} alt="Cart Widget" title="Agregar al Carrito" href="#"/>
            </button>
        </div>
    )
}

export default ItemCount