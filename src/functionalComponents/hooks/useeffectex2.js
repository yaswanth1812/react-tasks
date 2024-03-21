
import axios from "axios"
import { useEffect, useState } from "react"
import Spiner from "../../components/spinner"
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"


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
        {products.length>0
        ?
        (<Table style={{ border: "2px solid black" }}>
        <tbody>
        {products.map((eachobject,index)=>{
            return(
                <tr key={index}>
                        <td>{eachobject.title}</td>
                        <td><img src={eachobject.image} alt="products" width={200} height={200}></img></td>
                        <td>{eachobject.price} </td>
                        <td>
                            <Button> <Link to={`/${eachobject.category}/${eachobject.id}`}>Click to see the product</Link> 
                            </Button>
                            
                            </td>
                    </tr>
        )
        })}
        </tbody>
        </Table> 
    )       
        :
        <Spiner></Spiner>
    }
    </>

    )
}
export default ProductsTable