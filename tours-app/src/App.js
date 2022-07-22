import React from 'react'
import Tours from './Components/Tours';



function App() {
  const [tours, setTours] = useState([])
  return (
    <>
    <h1 style={{color: "blue"}} >Our Tours</h1>
    <Tours/>
  
  </>
)
}
export default App;

