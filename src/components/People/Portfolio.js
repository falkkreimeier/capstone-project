import styled from 'styled-components/macro'
import Video from '../People/Assets/Profile_Video.mp4'
import Portfolioimg from '../People/Assets/Portfolio.png'
import PortfolioDatei from '../People/Assets/Portfolio-komprimiert Kopie.pdf'

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
  width: 220px;
  grid-area: portfolio;
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media (max-width: 800px) {
    min-width: 420px;
  }
`

const Headline = styled.h2`
  margin-top: 10px;
  font-size: 1.3rem;
  font-family: var(--main-Headline);
  font-size: 1.3rem;
`

const LinkContainer = styled.div`
  margin: 0 auto;
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
  max-height: 90px;
  margin: -5px 0px 15px 0px;
`

export default Portfolio
