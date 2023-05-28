import React from 'react'
import { useParams } from 'react-router-dom';

const About = () => {
    const { about_id } = useParams();

    const aboutData = {
        "the-team": {
          title: "The Team",
          description: "Meet our amazing team members...",
          // Other details specific to "The Team"
        },
        "the-kombucha": {
          title: "The Kombucha",
          description: "Discover our delicious kombucha flavors...",
          // Other details specific to "The Kombucha"
        },
        "the-croissant-loaf": {
          title: "The Croissant Loaf",
          description: "Indulge in our mouthwatering croissant loaves...",
          // Other details specific to "The Croissant Loaf"
        }
      };

      const aboutDetails = aboutData[about_id];

    
      console.log(aboutDetails)
  return (
    <div>About</div>
  )
}

export default About;