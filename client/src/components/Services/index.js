import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2, 
    ServicesP
 } from './ServicesElements'
import { useNavigate } from 'react-router-dom'

const Services = () => {
const nav = useNavigate()

function goToShop(param){
    console.log(param)
    nav(`shop/${param}`)
}

  return (
    <ServicesContainer id={'shop'}>
            <ServicesH1>Shop</ServicesH1>
            <ServicesWrapper>
                <ServicesCard onClick={(e) => goToShop('kombucha')}>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Kombucha.</ServicesH2>
                    <ServicesP>Green tea with fruit puree and probiotics.</ServicesP>
                </ServicesCard>
                <ServicesCard  onClick={(e) => goToShop('crossiant')}>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Bakery.</ServicesH2>
                    <ServicesP>The crossiant loaf is here!</ServicesP>
                </ServicesCard>
                <ServicesCard onClick={(e) => goToShop('pooch')} >
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Pooch.</ServicesH2>
                    <ServicesP>Dog treats approved by Nori herself.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
   
  )
}

export default Services