import React, {useState,useEffect} from 'react'
import './App.css';
import Navbar  from './Components/Navbar';
import Tours from './Components/Tours';
import Loading from './Components/Loading';


function App() {
  const [tours, setTours] = useState([])
  const [loading,setLoading] = useState(true)
  

  function fetchData (){
    fetch("https://course-api.com/react-tours-project")
    .then(response => response.json())
    .then (toursData => setTours(toursData))
    setLoading(false)
  // .catch(error)
  //   setLoading(false)
  //   console.log(error)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  function handleDeleteTour(id){
     const newTours = tours.filter((tour) =>tour.id !== id)
     setTours(newTours)
  }

  if(loading){
    return(
      <div className="container">
        <Loading />
      </div>
    )
  }else if(!loading && tours.length === 0){
    return(
      <div className="container">
        <h2>No Tours Left</h2>
        <button className="refresh" onClick={()=>{
          setLoading(true)
          fetchData()}}>
            Refresh
            </button>
      </div>
    )
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

