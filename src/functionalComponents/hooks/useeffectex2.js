
import axios from "axios"
import { useEffect, useState } from "react"
import Spiner from "../../components/spinner"


const ProductsTable=()=>{
    const[products,setproducts]=useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((Response)=>{
        if(Response.status===200){
            setproducts(Response.data)
        }
        else{
            alert("something went wrong")
        }
    })
},[])
    return(
        <>
        <h1>APi products in a table</h1>
        {
        products.length>0
        ?
        products.map((eachobject)=>{
            return(
                <>
                <table style={{border:"2px solid black"}}>
                    <tr>
                        <td>{eachobject.title}</td>
                        <td><img src={eachobject.image} alt="products" width={200} height={200}></img></td>
                        <td>{eachobject.price} </td>
                    </tr>
                </table>
                
                </>
            )
        })
        :
        <Spiner></Spiner>
    }
    </>

    )
}
export default ProductsTable