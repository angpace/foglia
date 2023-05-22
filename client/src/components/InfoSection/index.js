import React from 'react'
import { Button } from 'react-scroll'
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './InfoElements'

const InfoSection = () => {
  return (
    <>
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
          <TextWrapper>
            <TopLine>
              TopLine
            </TopLine>
            <Heading>heading</Heading>
            <Subtitle>Subtitle</Subtitle>
            <BtnWrap>
              <Button to="about"></Button>
            </BtnWrap>
          </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
            <Img/>
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection