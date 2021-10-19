import styled from 'styled-components'
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
      <div>
        <a href={PortfolioDatei}>
          <Button>Portfolio</Button>
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: portfolio;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  grid-area: portfolio;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  min-width: var(--main-width);
`

export const Button = styled.button`
  min-width: 130px;
  height: 30px;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  margin: 0 0 20px 0;
  border-radius: 40px 40px 40px 40px;
  background-color: white;
  font-family: 'Inter', sans-serif;
  color: black;
  box-shadow: 5px 5px 10px 5px black;
  &:hover {
    background-color: black;
    box-shadow: 0px 0px 5px 5px grey;
    color: white;
  }
`

const Image = styled.img`
  max-height: 5rem;
  margin: 0px 0px 15px 0px;
`

export default Portfolio
