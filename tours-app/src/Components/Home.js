import React ,{useState,useEffect} from "react";
import SearchBar from './SearchBar'
import Tours from './Tours';
//import Navbar  from './Components/Navbar';
import Loading from './Loading';

function Home() {
  const [tours, setTours] = useState([])
  const [loading,setLoading] = useState(true)
  
  

  function fetchData (){
    fetch("http://localhost:8000/tours")
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

  const handleDeleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
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
    <div>
      
            <SearchBar />
            <Tours tours={tours} handleDeleteTour={handleDeleteTour}/>
        </div>
  )}

export default Home