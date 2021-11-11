import styled from 'styled-components/macro'
import Übergeschnapst from '../Assets/Süß.jpg'
import { Link } from 'react-router-dom'

function CampaignCardLink() {
  return (
    <Wrapper>
      <Link to="/campaign">
        <Image src={Übergeschnapst} alt="" />
      </Link>
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
    height: 300px;
    transform: translateY(0px);
    &:hover {
      transform: translateY(-4px);
    }
    &:active {
      transform: translateY(4px);
      transition: 0.1s;
    }
  } ;
`

const Image = styled.img`
  margin: 0 auto;
  height: 260px;
`

export default CampaignCardLink
