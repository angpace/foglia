import React, {useState} from 'react'
import Video from '../../videos/video1.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Welcome to Foglia</HeroH1>
          <HeroP>Indulge Naturally.</HeroP>
          <HeroBtnWrapper>
            <Button to="shop" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" smooth={true} duration={500} spy={true} exact='true' offset={-60}
            >Check it out. {hover? <ArrowForward /> : <ArrowRight />}</Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection