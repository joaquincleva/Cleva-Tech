import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./CartItem.css"

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
    return(
        <div className="cartItem" >
            <Link to={`/item/${item.id}`} className="linkProducto" title="Ir al producto">
                <img src={item.pictureUrl} width="50" alt={item.title} title={item.title}/>
            </Link>
            <p className="cartItem__Item">{item.title}</p>
            <p className="cartItem__Item">
                ${item.price} {"\u00D7"} {item.quantity} = ${item.price*item.quantity}
            </p>
            <button onClick={()=>removeItem(item.id)} 
                className="removeItem"
                title="Remover Producto del Carrito">
                    {"\u00D7"}
            </button>
        </div>
    )
}

export default CartItem