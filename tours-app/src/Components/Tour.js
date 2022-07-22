import React from 'react'

 function Tour({id, name, info, image, price}){
    return (
        <div className='container'>
          <div className='tours'>
            <div className='tour'>
              <img src="" alt='tour' />
     
              <div className='txt'>
                <h3>{name}</h3>
                <h4>${price}</h4>
              </div>
    
     
            </div>
          </div>
        </div>
      )
     }   

 
 export default Tour