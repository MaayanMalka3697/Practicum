import singleton from './Services/Server';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';



export default function GetData()
{
    const [data, setData] = useState([]);
    const [clicked,setClicked]=useState(false);
  function get()
  {
      setData(singleton.getService());
      setClicked(true);
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