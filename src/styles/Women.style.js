import styled from 'styled-components'

export const InfoContainer = styled.div`
background-color: grey;
height: 580px;
margin-top: 80px;
margin-left: -60px;
@media screen and (max-width: 768px){
    padding: 100px 5;
};
`

export const InfoWrapper = styled.div`
/* display: grid; */
/* z-index: 1; */
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
margin-bottom: 200px;

/* padding:0 24px; */
/* justify-content: center; */
`

export const InfoRow = styled.div`
/* display: grid; */

/* background-color: blue; */
/* grid-auto-columns: minmax(auto, 1fr); */
/* align-items:center; */
/* grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'`:`'col1 col2`)}; */

/* @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)}
} */

`

export const Column1 = styled.div`
/* margin-top: -370px; */
padding: 0 0px;
display: flex;
flex-direction: row;

/* grid-area: col1; */
`

// export const Column2 = styled.div`
// margin-bottom: 15px;
// padding: 0 15px;
// grid-area: col2;
// `

export const TextWrapper = styled.div`
width: 356px;
height: 338px;
padding-top: 0;
border: 1px solid;
margin-left: 20px;


/* display: -ms-inline-grid; */
/* gap: 200; */
background-color: green;

/* padding-bottom: 60px; */
`

export const TopLine = styled.p`
color: #1D1F22;
font-size: 32px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;

padding-top: 68px;
padding-bottom: 50px;
/* background-color: red; */
`

export const Heading = styled.h1`
/* margin-bottom: 24px; */
font-size: 48px;
line-height: 1.1;
font-weight: 600;
/* color:${({ lightText})=>(lightText ? '#f7f8fa':'010606')}; */

/* @media screen and (max-width:480px){
    font-size: 32px;
} */
`

export const Subtitle = styled.p`
/* max-width: 440px; */
margin-top: -75px;
font-size: 25px;
line-height: 24px;
// color: ${({darkText})=> (darkText ? '#010606':'#fff')}
`

export const Currency = styled.p`
/* max-width: 440px; */
margin-top: -20px;
font-size: 16px;
line-height: 15px;
// color: ${({darkText})=> (darkText ? '#010606':'#fff')}
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
/* margin: 0 0 0 0; */
padding-right: 0;
`