import { useEffect, useState } from "react"
import { getProductById } from "../../async-mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(0)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then((response) => {
                setProduct(response)
            })
            .catch((error) => {
                console.error(error)
            })
    },[itemId])

    return (
        <div className="itemDetail">
            <ItemDetail props={product}/>
        </div>
    )
}

export default ItemDetailContainer