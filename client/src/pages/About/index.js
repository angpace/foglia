import React from 'react'
import { useParams } from 'react-router-dom';
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from '/Users/ap/Development/foglia/client/src/components/InfoSection/InfoElements.js'
import { Button } from 'react-scroll';

const About = () => {
    const { about_id } = useParams();
  //   export const homeObjOne = {
  //     id: 'about',
  //     lightBg: false,
  //     lightText: false,
  //     lightTextDesc: true,
  //     topLine: 'On our way!',
  //     headline: 'Delivery Now Available.',
  //     description: 'Started in our home in Sunnyside, Queens, shipping to wherever you call home.',
  
  //     buttonLabel: 'Take a Look',
  //     imgStart: true,
  //     img: require('../../images/svg-1.svg').default,
  //     alt: 'kombucha',
  //     dark: true,
  //     primary: false,
  //     darkText: false,
  // }
    const aboutData = {
        "the-team": {
          title: "The Team",
          description: "Meet our amazing team members...",
          lightBg: false,
          lightText: false,
          lightTextDesc: true,
          topLine: 'On our way!',
          buttonLabel: 'Take a Look',
          imgStart: true,
          img: require('/Users/ap/Development/foglia/client/src/images/svg-1.svg').default,
          alt: 'kombucha',
          dark: true,
          primary: false,
          darkText: false,

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

      const details = aboutData[about_id];

    
      // console.log(aboutDetails)
  return (
    <>
    <InfoContainer lightBg={details.lightBg} id={details.id}>
      <InfoWrapper>
        <InfoRow imgStart={details.imgStart}>
          <Column1>
          <TextWrapper>
            <TopLine>
              Hello
            </TopLine>
            <Heading lightText={details.lightText}>{details.title}</Heading>
            <Subtitle darkText={details.darkText}>{details.description}</Subtitle>
            <BtnWrap>
              <Button to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-60}
              primary={true}
              dark={false}

              ></Button>
            </BtnWrap> 
          </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
            <Img src={details.img} alt={details.alt}/>
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default About;