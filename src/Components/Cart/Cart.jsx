import {useContext} from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem"
import "./Cart.css"

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    return (
        totalQuantity === 0? 
            <div className="carritoVacio">
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className="verProductos">Ver Productos</Link>
            </div>
        :
            <div className="cart">
                <div className="cartItemCart">
                    {cart.map(p=><CartItem key={p.id} item={p}/>)}
                </div>
                <h3 className="total">Total: ${total}</h3>
                <div className="footer">
                    <button onClick={()=>clearCart()} 
                        className="clearCart"
                        title="Eliminar productos del carrito">
                            Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="checkout">Checkout</Link>
                </div>
            </div>
    )
}

export default Cart