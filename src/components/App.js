
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';
import axios from "axios";


const App = () => {
  const [input,setinput]=useState('https://jsonplaceholder.typicode.com/posts');
  const [data,setdata]=useState([]);
  const data1=useMemo(()=>{
    storedata();
        },[input]);
     function storedata(){
     console.log('in use memo');
     return data;
    }
  useEffect(()=>{
    axios.request(input).then((res)=>{
      console.log(res.data);
      setdata(res.data);
    });
},[]);

  
 
  return (
    <div>
    eeeeee
      <ul>
      {
  data.map((item,i)=> 
  <li key={i+'a'}>
  <h3>{item.title}</h3>
  <p>{item.body}</p>
</li>
  )
}
      </ul>

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
