import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
      
      <Container>
        <h4>Recommended for You</h4>

        <Content>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZpoi5J7ChHnInZp_YZ9OMzZIGwfIMp2CQDeFER37S0k4B933MedXnzYxjJSOLGwt0MERr9nzilBrnIv05b4zR_MyeLq8Lg0M5jl0qjBI8IzkIOpiC2JovVHPDg0NECr6IxRhwwu4hBA9Mh6FxGFKS-lOJKW6A.jpg?r=8b1" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbeXJE12J1M70yI9LwotPMIAgUwU0uzTzsIpsy1wCroGF32XZyJ2WSJ5W8oV2gQC4oB__8-1ir5nZAvBS-FRNK2gTP_bYatj3hIMYPJmXAFHvzhG9DjOApEEhSx9.jpg?r=cea" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRW2hTDfM6CjAv_OQ7Sxb3aizmdRnT81eg-kncpg40G_tN3gyTk_82ZE2VTfrzVw1x-vE3skO0UbU6jffxkjm0BmDuA.webp?r=379" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZpoi5J7ChHnInZp_YZ9OMzZIGwfIMp2CQDeFER37S0k4B933MedXnzYxjJSOLGwt0MERr9nzilBrnIv05b4zR_MyeLq8Lg0M5jl0qjBI8IzkIOpiC2JovVHPDg0NECr6IxRhwwu4hBA9Mh6FxGFKS-lOJKW6A.jpg?r=8b1" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbeXJE12J1M70yI9LwotPMIAgUwU0uzTzsIpsy1wCroGF32XZyJ2WSJ5W8oV2gQC4oB__8-1ir5nZAvBS-FRNK2gTP_bYatj3hIMYPJmXAFHvzhG9DjOApEEhSx9.jpg?r=cea" />
          </Wrap>
          <Wrap>
              <img src="https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRW2hTDfM6CjAv_OQ7Sxb3aizmdRnT81eg-kncpg40G_tN3gyTk_82ZE2VTfrzVw1x-vE3skO0UbU6jffxkjm0BmDuA.webp?r=379" />
          </Wrap>
        </Content>  
      </Container>
  )
    
}

export default Movies;

const Container = styled.div``

const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   grid-gap: 25px;
`

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }

   &:hover {
       transform: scale(1.05);
       border-color: rgba(249, 249, 249, 0.8);
       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   }
`
