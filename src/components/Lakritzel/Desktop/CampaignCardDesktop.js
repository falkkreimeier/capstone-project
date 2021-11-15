import styled from 'styled-components/macro'
import Übergeschnapst from '../Assets/Süß.jpg'

function CampaignCardDesktop() {
  return (
    <Wrapper>
      <Image src={Übergeschnapst} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-area: campaignLink;
  display: none;
  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    background-color: white;
    width: var(--main-width);
    /* height: 300px; */
  }
`

const Image = styled.img`
  margin: 0 auto;
  height: 297px;
`

export default CampaignCardDesktop
