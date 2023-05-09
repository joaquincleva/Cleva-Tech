import ItemCount from "../ItemCount.js/index.js"
import "./ItemDetail.css"

const ItemDetail = ({props}) => {

    return (
        <article>
            <header> 
                <h2> 
                    {props.title}
                </h2>
            </header>
            <picture>
                <img src={props.pictureUrl} alt={props.title} width={200}></img>
            </picture>
            <section>
                <p className="description">{props.description}</p>
                <p>Precio: ${props.price}</p>
                <p>Stock disponible: {props.stock}</p>
            </section>
            <footer className="agregarCarrito">
                <ItemCount stock={props.stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail