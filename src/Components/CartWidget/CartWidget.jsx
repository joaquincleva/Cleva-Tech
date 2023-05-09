import iconoCarrito from "./iconoCarrito.png"
import { Badge } from "react-bootstrap"
import {Button} from "react-bootstrap"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <Button variant="outline-secodnary" className="carrito">
            <img src={iconoCarrito} width={30} alt="Cart Widget" href="#"/> <Badge className="notification" bg="danger">5</Badge>
        </Button>
    )
}

export default CartWidget