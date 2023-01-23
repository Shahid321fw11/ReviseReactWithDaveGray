import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType,setReqType] = useState('users');
  const [item,setItem] = useState([]);

  useEffect(()=>{
    const fetchItems = async()=>{
      try {
        const response  = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItem(item);
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems();
  },[reqType]);

  return <>
    <Form reqType={reqType} setReqType={setReqType}/>

  </>
}

export default App;
