import axios from "axios";
import { useEffect, useState } from "react"

const DataFetch = ()=>{
    const [data, setData] = useState();
    useEffect( ()=>{
        const fetchData = async () =>{
            try{
            const result = await axios.get('https://www.boredapi.com/api/activity')
            setData([result.data])
        } catch(error){
            console.error('Error fetching data:',error);
         }
        }

        fetchData();
    },[]);
    return (
        <div>
            <h1>Data List</h1>
            <ul>
                {data.map(item=>(
                    <li key ={item.key}>{item.activity}</li>
                ))}
            </ul>
        </div>
    )
   
}
export default DataFetch