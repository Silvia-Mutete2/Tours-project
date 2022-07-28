import React from 'react'
import '../App.css'
const About = () => {
    return (
        <div className="about">
        <h2 class="title">About us</h2>
        <div class="about-content">
            <div class="column left">
                <img src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=400" alt='travel'/>
            </div>
            <div class="column right">
        <p>Alis Tours is part of Alis Travel A/S, a African travel company founded in 2022 by the software engineer and writer Silvia Mutete. </p>   
        <p>Initially we only offered tours in Kenya but over the months this has expanded to include African destinations, with a particular emphasis on ecotourism. We also offer cruises and arrange adventure marathon holidays in challenging environments.</p>
        <p>Furthermore, we own a majority share in a cruise ship, the Clipper Adventurer, which has an ice strengthened hull and is capable of taking up to 122 passengers to the remote Arctic regions.</p>
            </div>
        </div>
      </div>
    )
}

export default About