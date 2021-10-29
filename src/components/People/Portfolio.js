import styled from 'styled-components/macro'
import { Headline } from './Profile'
import Video from '../People/img/Profile_Video.mp4'
import Portfolioimg from '../People/img/Portfolio.png'
import PortfolioDatei from '../People/img/Portfolio-komprimiert Kopie.pdf'

function Portfolio() {
  return (
    <Wrapper>
      <Headline>Da wird die Milch sauer!</Headline>
      <a href={Video}>
        <Image
          src={Portfolioimg}
          alt="Werbung für Andros, eine vegane Joghurtalternative"
        />
      </a>
      <LinkContainer>
        <Link href={PortfolioDatei}>Portfolio</Link>
      </LinkContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: portfolio;
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  min-width: var(--main-width);
`
const LinkContainer = styled.div`
  margin: 5px auto;
  width: 130px;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  border-radius: 40px;
  background-color: black;
  font-family: var(--main-font);
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;
`

const Image = styled.img`
  max-height: 160px;
  margin: 0px 0px 15px 0px;
`

export default Portfolio
