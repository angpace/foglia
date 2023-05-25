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

const Services = () => {
  return (
    <ServicesContainer id={'shop'}>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses.</ServicesH2>
                    <ServicesP>wE HELP DO THIS AND THAT</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual.</ServicesH2>
                    <ServicesP>Hello are we software engineers yet</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce Expenses.</ServicesH2>
                    <ServicesP>Help me!
                        bee boo bop bop
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
   
  )
}

export default Services