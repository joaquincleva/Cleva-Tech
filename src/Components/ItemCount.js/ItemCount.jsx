import { useState } from "react"
import "./ItemCount.css"
import iconoCarritoColor from "./iconoCarritoColor.png";
import iconoCarritoGris from "./iconoCarritoGris.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({props}) => {
    const [cantidad, setCantidad] = useState(0)

    const aumentar = () => {
        if(cantidad<props.stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminuir = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }
    const {addItem, isInCart} = useContext(CartContext)
    const handleOnAdd = () => {

        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            pictureUrl: props.pictureUrl
        }
        
        addItem(item,cantidad)
    }

    return (
        <div className="agregarCarrito">
            {!isInCart(props.id)? (
            <div>
                <button onClick={disminuir} className="botonStock">-</button>
                <span className="quantity">{cantidad}</span>
                <button onClick={aumentar} className="botonStock">+</button>
                <button onClick={handleOnAdd} disabled={!props.stock || cantidad === 0} className={cantidad<=0?"botonCarritoGris":"botonCarrito"}>
                    <img className="imagenCarrito" 
                        src={cantidad<=0?iconoCarritoGris:iconoCarritoColor} 
                        width={30} 
                        alt="Cart Widget" 
                        title={cantidad<=0?"":"Agregar al Carrito"}
                        href="#"/>
                </button>
            </div>
            ):(
                <div className="opciones">
                    <Link to="/" className="opcion">Ver más productos</Link>
                    <Link to="/cart" className="opcion">Terminar Compra</Link>
                </div>
            )}
            
        </div>
    )
}

export default ItemCount