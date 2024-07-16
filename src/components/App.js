
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';
import axios from "axios";


const App = () => {
  const [loading,setloading]=useState(true);
  const [input,setinput]=useState('https://jsonplaceholder.typicode.com/posts');
  const [data,setdata]=useState([]);
  const [c,setc]=useState(0);
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
      setloading(false);
    });
},[c]);

  
 
  return (
    <div>
      {loading && <div>Loading...</div> }
      <ul>
      {
  data.map((item,i)=> 
  <li key={i+'a'}>
  <h4>{item.title}</h4>
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
