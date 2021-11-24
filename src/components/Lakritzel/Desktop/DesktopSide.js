import styled from 'styled-components/macro'
import Shop from '../Mobile/Shop'
import ProductList from '../Mobile/ProductList'
import CampaignCardDesktop from './CampaignCardDesktop'
import CocktailsDesktop from './CocktailsDesktop'
import ProfileDesktop from './ProfileDesktop'

function DesktopSide({
  onAddOrder,
  data,
  onFlipToShopButtonClick,
  flipToShop,
  setFlipToShop,
  count,
  setCount,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
}) {
  return (
    <Wrapper>
      <Shop
        count={count}
        setCount={setCount}
        onFlipToShopButtonClick={onFlipToShopButtonClick}
        flipToShop={flipToShop}
        setFlipToShop={setFlipToShop}
        onAddOrder={onAddOrder}
        data={data}
        ClickUpHandler={ClickUpHandler}
        ClickDownHandler={ClickDownHandler}
        onHandleChange={onHandleChange}
      />
      <ProductList data={data} />
      <CampaignCardDesktop />
      <CocktailsDesktop />
      <ProfileDesktop />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media only screen and (min-width: 1000px) {
    width: 1060px;
    margin: 0 auto;
    display: grid;
    grid-gap: 3px;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas:
      'campaignLink shop kritzelkopf'
      'productCard shop cocktailsLink';
  }
`

export default DesktopSide
