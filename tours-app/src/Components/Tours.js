import React from 'react'
import {Tour}  from './Tour'


function Tours({tours,handleDeleteTour}){

  return (
    <>
    {tours.map((tour) => (
      <Tour
        key={tour.id}
        image={tour.image}
        name={tour.name}
        price={tour.price}
        info={tour.info}
        handleDeleteTour={handleDeleteTour}
        id={tour.id}
      />
    ))}
    </>
  )
}

export default Tours