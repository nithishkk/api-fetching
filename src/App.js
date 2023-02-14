import React from "react";
import "./style.css";
const URI="https://jsonplaceholder.typicode.com/users"
export default function App() {
  const[data,setData]=React.useState([])

  const fetchData= async (apiurl)=>{
    const response= await fetch(apiurl)
    const data= await response.json()
    setData(data)
    console.log(data)


  }
React.useEffect(()=>{
  fetchData(URI)
},[])
  return (
    <div>
     
      <h1>Hello StackBlitz!</h1>
      <ul>
       { data && data.length>0 &&  data.map((item,index)=>{
        <>
        <li key={item.id}>{item.id}</li>
        <h1>{item.name}</h1>
        </>
      })}
        </ul>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
