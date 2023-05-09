import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../async-mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=> {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(() => {
                setProducts([])
            })
            
    }, [categoryId])

    return(
        <div>
            <h1>{categoryId ? categoryId : "Bienvenidos a la tienda digital de Coder"}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer