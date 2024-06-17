import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [clicked,setClicked]=useState(false);
function get()
{
  //axios.post('http://127.0.0.1:5000/api/data',)
  axios.get('http://127.0.0.1:5000/api/data')
      .then(response => {
        setData(response.data);
        setClicked(true);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
}


  return (
    <>
      <h1>hi!</h1>
      <Button onClick={get}>click me to get DATA...!</Button>
      {clicked?
      data.map(item=>
      <Card key={item.id} variant="outlined">{item.name}</Card>):""
      }
      {data.length==0?
      console.log("no data"):""}

      
    </>
  )
}

export default App
