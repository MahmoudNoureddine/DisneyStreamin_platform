import React from 'react';
import styled from 'styled-components';

function Details() {
  return <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1920&aspectRatio=1.78&format=jpeg" />
      </Background>
        <ImageTitle>
          <img src="/images/logo.svg" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src ="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>
           2018 . 7m . Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
          A Chinese mom who's sad when her grown son leaves home gets another 
          chnace at motherhood when one of her dumpligns springs to life. But she finds
          that nothing stays cute and small forever.
        </Description>
      
  </Container>;
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const ImageTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;
   img {
     width: 100%;
     height: 100%;
     object-fit: contain;
   }
`

const Controls = styled.div`
   display: flex;
   align-items: center;
`

const PlayButton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   padding: 0px 24px;
   margin-right: 22px;
   display: flex;
   align-items: center;
   height: 56px;
   background-color: rgb(249, 249, 249);
   border: none;
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover {
      background: rgb(198, 198, 198);
  
   }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: none;
   border: 2px solid rgb(249, 249, 249);
   background: rgba(0, 0, 0, 0.6);
   margin-right: 16px;
   cursor: pointer;
   
   
      span {
        font-size: 24px;
        color: white;
      }
   

  //  &:hover {
  //    background: rgb(249, 249, 249);
  //    color: black;
  //  }
`

const GroupWatchButton = styled(AddButton)`
   background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`