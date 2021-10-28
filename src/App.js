import Header from './components/Lakritzel/Header'
import AgeGate from './components/Lakritzel/AgeGate'
import ProductList from './components/Lakritzel/ProductList'
import Shop from './components/Lakritzel/Shop'
import Nav from './components/Lakritzel/Nav'
import CampaignCard from './components/Lakritzel/CampaignCard'
import CocktailList from './components/Lakritzel/CocktailList'
import Kritzelkopf from './components/People/Kritzelkopf'
import styled, { css } from 'styled-components/macro'
import { Switch, Route } from 'react-router-dom'
import useOrder from './hook/useOrder'
import WrongAgePicture from './components/Lakritzel/WrongAgePicture'
import { useState } from 'react'
import saveToLocal from './hook/saveToLocal'
import loadFromLocal from './hook/loadFromLocal'

function App({ data }) {
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
            <ProductList data={data} />
            <Shop onAddOrder={handleAddOrder} />
          </Route>
          <Route exact path="/campaign">
            {data.campaign.map(campaign => (
              <CampaignCard image={campaign.image} key={campaign.image} />
            ))}
          </Route>
          <Route exact path="/cocktails">
            <CocktailList data={data} />
          </Route>
          <Route exact path="/kritzelkopf">
            <Kritzelkopf />
          </Route>
        </Switch>
      </Main>
      <Nav showWelcomeAnimation={showWelcomeAnimation} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  max-height: 963px;
`

const Main = styled.main`
  margin: 93px auto;
  padding-bottom: 90px;
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
`

export default App
