import React, { Component } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Currency
} from '../styles/Women.style'
import  Navbar from "../components/Navbar"
import img from "../images/imageone.jpg"
import { gql,useQuery } from '@apollo/client'

// const GET_PRODUCTS=gql`

// `

export default class Women extends Component {
  render() {
   
    
    return (
      <>
      
      <InfoContainer >
    
         <InfoWrapper>
         
         <InfoRow>
         <TopLine>Category name</TopLine>
             <Column1>
             <TextWrapper>
                 {/* <Heading >Image</Heading> */}
                 <ImgWrap>
                 <Img src={img} />
                </ImgWrap> 
                 <Subtitle>title</Subtitle> 
                 <Currency>Currency</Currency> 
             </TextWrapper>

             <TextWrapper>
                 {/* <Heading >Image</Heading> */}
                 <ImgWrap>
                 <Img src={img} />
                </ImgWrap> 
                 <Subtitle>title</Subtitle> 
                 <Currency>Currency</Currency> 
             </TextWrapper>

             <TextWrapper>
                 {/* <Heading >Image</Heading> */}
                 <ImgWrap>
                 <Img src={img} />
                </ImgWrap> 
                 <Subtitle>title</Subtitle> 
                 <Currency>Currency</Currency> 
             </TextWrapper>
             </Column1>
            
         </InfoRow>
     </InfoWrapper>
      </InfoContainer>
    </>
      
    )
  }
}