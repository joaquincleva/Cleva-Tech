import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({props}) => {
    return (
        <article className="Item">
            <header> 
                <h3> 
                    {props.title}
                </h3>
            </header>
            <picture>
                <img src={props.pictureUrl} alt={props.title} width={100}></img>
            </picture>
            <section>
                <p className="stock">Stock disponible: {props.stock}</p>
            </section>
            <footer>
                <Link to={`/item/${props.id}`}> <span>Ver Detalles</span> </Link>
            </footer>
        </article>
    )
}

export default Item