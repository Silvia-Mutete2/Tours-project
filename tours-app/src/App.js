import React, {useState,useEffect} from 'react'
import './App.css';
import Navbar  from './Components/Navbar';
import Tours from './Components/Tours';


function App() {
  const [tours, setTours] = useState([])
  

  function fetchData (){
    fetch("https://course-api.com/react-tours-project")
    .then(response => response.json())
    .then (toursData => setTours(toursData))
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  function handleDeleteTour(id){
     const newTours = tours.filter((tour) =>tour.id !== id)
     setTours(newTours)
  }

  return (
    <>
    <header>
    <Navbar/>
    <h1 style={{color: "blue"}} >Our Tours</h1>
    <Tours tours={tours} handleDeleteTour={handleDeleteTour}/>
    </header>
  </>
)
}
export default App;

