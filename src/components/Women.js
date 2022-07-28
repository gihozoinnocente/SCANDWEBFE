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
  // ImgWrap,
  // Img
} from '../styles/Women.style'

export default class Women extends Component {
  render() {
    return (
      <InfoContainer >
    
         <InfoWrapper>
         
         <InfoRow>
         <TopLine>Category name</TopLine>
             <Column1>
             <TextWrapper>
                 <Heading >Image</Heading>
                 <Subtitle>title</Subtitle> 
                 <Subtitle>Currency</Subtitle> 
             </TextWrapper>
             <TextWrapper>
                <Heading >Image</Heading>
                <Subtitle>title</Subtitle> 
                <Subtitle>Currency</Subtitle> 
            </TextWrapper>
             </Column1>
            
             {/* <Column2>
             <ImgWrap>
             <Img src={img} alt={alt}/>
             </ImgWrap> 
             </Column2>   */}
         </InfoRow>
     </InfoWrapper>
      </InfoContainer>
      
    )
  }
}










// import React from 'react'
// // import { Button} from '../ButtonElements'
// import {
//   InfoContainer,
//   InfoWrapper,
//   InfoRow,
//   Column1,
//   Column2,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   BtnWrap,
//   ImgWrap,
//   Img
// } from '../styles/Women.style'

// const InfoSection = ({
//   lightBg, 
//   id, 
//   imgStart, 
//   topLine, 
//   lightText,
//   headline,
//   darkText,
//   description,
//   buttonLabel,
//   img,
//   alt
//   }) => {
//   return (
//     <>
//     <InfoContainer id={id}>
//     <InfoWrapper>
//         <InfoRow imgStart={imgStart}>
//             <Column1>
//             <TextWrapper>
//                  <TopLine>{topLine}</TopLine>
//                 <Heading lightText={lightText}>{headline}</Heading>
//                 <Subtitle darkText={darkText}>{description}</Subtitle> 
// {/*               
//               <TopLine>TopLine</TopLine>
//                 <Heading >Heading</Heading>
//                 <Subtitle >Subtitle</Subtitle> */}
              
//                 {/* <BtnWrap>
//                     <Button to='home'>{buttonLabel}</Button>
//                 </BtnWrap> */}
//             </TextWrapper>
//             </Column1>
//             <Column2>
//             <ImgWrap>
//             <Img src={img} alt={alt}/>
//             </ImgWrap>
//             </Column2>  
//         </InfoRow>
//     </InfoWrapper>
//     </InfoContainer>
//     </>
//   )
// }

// export default InfoSection