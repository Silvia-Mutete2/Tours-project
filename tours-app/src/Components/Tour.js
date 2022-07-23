import React,{useState} from 'react'

 function Tour({id, name,  image, price,info,handleDeleteTour }){
    const [readmore, setReadmore] = useState(false)
    return (
        <div className='container'>
          <div className='tours'>
            <div className='tour'>
              <img src={image}  alt='tour' />
     
              <div className='txt'>
                <h3>{name}</h3>
                <h4>${price}</h4>
              </div>
              <p>
              {readmore ? info : `${info.substring(0, 200)}....`}
           <button id='txtBtn' onClick={() => setReadmore(!readmore)}>
             {!readmore ? 'Show more' : 'Show less'}
           </button>
              </p>
              <button id="deleteBtn" onClick={() => handleDeleteTour(id)}>Not Interested</button>
     
            </div>
          </div>
        </div>
      )
     }   

 
 export default Tour