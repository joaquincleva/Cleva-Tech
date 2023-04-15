import iconoCarrito from "./iconoCarrito.png"
import { Badge } from "react-bootstrap"
import {Button} from "react-bootstrap"

const CartWidget = () => {
    return (
        <Button variant="outline-secodnary" className="carrito">
            <img src={iconoCarrito} width={35} alt="Cart Widget" href="#"/> <Badge bg="danger">5</Badge>
        </Button>
    )
}

export default CartWidget