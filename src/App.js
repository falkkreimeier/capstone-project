import Header from './components/Lakritzel/mobile/Header'
import AgeGate from './components/Lakritzel/mobile/AgeGate'
import Nav from './components/Lakritzel/mobile/Nav'
import CampaignCard from './components/Lakritzel/mobile/CampaignCard'
import CocktailList from './components/Lakritzel/mobile/CocktailList'
import Kritzelkopf from './components/People/Kritzelkopf'
import CVPageOne from './components/People/CVPageOne'
import CVPageTwo from './components/People/CVPageTwo'
import AGB from './components/Lakritzel/mobile/AGB'
import Info from '../src/components/Lakritzel/mobile/Info'
import styled, { css } from 'styled-components/macro'
import {
  Switch,
  Route,
  useLocation,
  withRouter,
  Redirect,
} from 'react-router-dom'
import useOrder from './hook/useOrder'
import WrongAgePicture from './components/Lakritzel/mobile/WrongAgePicture'
import { useState, useEffect } from 'react'
import saveToLocal from './hook/saveToLocal'
import loadFromLocal from './hook/loadFromLocal'
import DesktopSide from './components/Lakritzel/desktopOnly/DesktopSide'
import Impressum from './components/Lakritzel/mobile/Impressum'
import Datenschutz from './components/Lakritzel/mobile/Datenschutz'
import Cookies from './components/Lakritzel/mobile/Cookies'

function App({ data }) {
  const [count, setCount] = useState(loadFromLocal('quantity') || 0)

  function ClickUpHandler() {
    setCount(count + 1)
    saveToLocal('quantity', count + 1)
  }

  const handleChange = event => {
    setCount(event.target.value)
  }

  function ClickDownHandler() {
    if (count > 0) {
      setCount(count - 1)
      saveToLocal('quantity', count - 1)
    }
  }

  const [showShoppingCard, setShowShoppingCard] = useState(false)
  function shoppingCardButton() {
    setShowShoppingCard(!showShoppingCard)
  }

  function shoppingCartButtonClick() {
    setShowShoppingCard(true)
  }

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
      {window.location.pathname !== '/kritzelkopf' &&
      window.location.pathname !== '/cvPageOne' &&
      window.location.pathname !== '/cvPageTwo' ? (
        <Header
          count={count}
          onShoppingCardButtonClick={shoppingCartButtonClick}
          showWelcomeAnimation={showWelcomeAnimation}
        />
      ) : null}
      <Main showWelcomeAnimation={showWelcomeAnimation}>
        <Switch>
          <Route exact path="/">
            <DesktopSide
              count={count}
              onShoppingCardButtonClick={shoppingCartButtonClick}
              showWelcomeAnimation={showWelcomeAnimation}
              onShoppingCardButton={shoppingCardButton}
              showShoppingCard={showShoppingCard}
              onAddOrder={handleAddOrder}
              data={data}
              setCount={setCount}
              ClickUpHandler={ClickUpHandler}
              ClickDownHandler={ClickDownHandler}
              onHandleChange={handleChange}
            />
          </Route>

          <Route path="/campaign">
            <Container>
              {data.campaign.map(campaign => (
                <CampaignCard image={campaign.image} key={campaign.image} />
              ))}
            </Container>
          </Route>
          <Route path="/cocktails">
            <Container>
              <CocktailList data={data} />
            </Container>
          </Route>
          <Route path="/info" component={Info} />
          <Route path="/agb" component={AGB} />
          <Route path="/impressum" component={Impressum} />
          <Route exact path="/datenschutz" component={Datenschutz} />
          <ContainerPortfolio>
            <Route path="/kritzelkopf" component={Kritzelkopf} />
            <Route path="/cvPageOne" component={CVPageOne} />
            <Route path="/cvPageTwo" component={CVPageTwo} />
          </ContainerPortfolio>
        </Switch>
      </Main>
      {window.location.pathname !== '/kritzelkopf' &&
      window.location.pathname !== '/cvPageOne' &&
      window.location.pathname !== '/cvPageTwo' ? (
        <Nav showWelcomeAnimation={showWelcomeAnimation} />
      ) : null}
      <Cookies />
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
  padding: 83px 0;
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
  @media (min-width: 1000px) {
    padding: 0px;
    width: 1060px;
  }
`

const ContainerPortfolio = styled.section`
  margin: -83px auto;
  height: 100vh;
  max-width: 1000px;
  @media (min-width: 1000px) {
    margin: 0 auto;
  }
`

export default withRouter(App)
