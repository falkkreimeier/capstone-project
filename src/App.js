import Header from './components/Lakritzel/Both/Header'
import AgeGate from './components/Lakritzel/Mobile/AgeGate'
import Nav from './components/Lakritzel/Both/Nav'
import CampaignCard from './components/Lakritzel/Mobile/CampaignCard'
import CocktailList from './components/Lakritzel/Mobile/CocktailList'
import Kritzelkopf from './components/People/Kritzelkopf'
import AGB from '../src/components/Lakritzel/Both/AGB'
import Info from '../src/components/Lakritzel/Both/Info'
import styled, { css } from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import useOrder from './hook/useOrder'
import WrongAgePicture from './components/Lakritzel/Mobile/WrongAgePicture'
import { useState, useEffect } from 'react'
import saveToLocal from './hook/saveToLocal'
import loadFromLocal from './hook/loadFromLocal'
import { useLocation } from 'react-router-dom'
import DesktopSide from './components/Lakritzel/Desktop/DesktopSide'
import Impressum from './components/Lakritzel/Both/Impressum'
import Datenschutz from './components/Lakritzel/Both/Datenschutz'

function App({ data }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const { handleAddOrder } = useOrder()

  const [isOver18, setIsOver18] = useState(loadFromLocal('age') || null)

  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(false)

  function AgeButtonClick(value) {
    setShowWelcomeAnimation(true)
    saveToLocal('age', value)
    setIsOver18(value)
  }
  if (!isOver18) {
    return (
      <Wrapper>
        <AgeGate onAgeButtonClick={AgeButtonClick} />
        {isOver18 === false && <WrongAgePicture />}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Header showWelcomeAnimation={showWelcomeAnimation} />
      <Main showWelcomeAnimation={showWelcomeAnimation}>
        <Switch>
          <Route exact path="/">
            <DesktopSide onAddOrder={handleAddOrder} data={data} />
          </Route>
          <Route exact path="/campaign">
            <Container>
              {data.campaign.map(campaign => (
                <CampaignCard image={campaign.image} key={campaign.image} />
              ))}
            </Container>
          </Route>

          <Route exact path="/cocktails">
            <Container>
              <CocktailList data={data} />
            </Container>
          </Route>

          <Route exact path="/kritzelkopf">
            <Kritzelkopf />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/agb">
            <AGB />
          </Route>
          <Route exact path="/impressum">
            <Impressum />
          </Route>
          <Route exact path="/datenschutz">
            <Datenschutz />
          </Route>
        </Switch>
      </Main>
      <Nav showWelcomeAnimation={showWelcomeAnimation} />
    </Wrapper>
  )
}

const Container = styled.section`
  @media only screen and (min-width: 1000px) {
    grid-gap: 4px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  max-height: 963px;
`

const Main = styled.main`
  margin: 0 auto;
  padding: 90px 0;
  border-radius: var(--border-radius);
  ${({ showWelcomeAnimation }) =>
    showWelcomeAnimation &&
    css`
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: fallDown;
      animation-fill-mode: forwards;
      @keyframes fallDown {
        from {
          transform: translatey(-900px);
        }

        to {
          transform: translateY(0px);
        }
      }
    `}
  @media only screen and (min-width: 1000px) {
    padding: 0px;
    width: 1060px;
  }
`

export default App
