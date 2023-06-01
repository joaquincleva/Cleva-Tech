import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css";
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()
    
    useEffect(()=> {
        setLoading(true)
        //Si categoryId está definida trae los productos de esa categoría, sino trae todos los productos
        const colecciones = categoryId
            ? query(collection(db, "items"), where("categoryId", "==", categoryId))
            : collection(db, "items")

        getDocs(colecciones)
            .then(res => {
                const productos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productos)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(()=> {
                setLoading(false)
            })
            
    }, [categoryId])

    return(
        <div>
            {loading ? 
            (
                <Spinner animation="border" variant="warning" className="spinner"/>
            ):(
                <div>
                    <ItemList products={products} />
                </div>
            )}
            
        </div>
    )
}
export default ItemListContainer