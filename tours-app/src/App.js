import React, {useState,useEffect} from 'react'
import Tours from './Components/Tours';



function App() {
  const [tours, setTours] = useState([])

  function fetchData (){
    fetch("https://course-api.com/react-tours-project")
    .then(response => response.json())
    .then (() => console.log(tours))
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <h1 style={{color: "blue"}} >Our Tours</h1>
    <Tours/>
  
  </>
)
}
export default App;

