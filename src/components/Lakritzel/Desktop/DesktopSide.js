import styled from 'styled-components/macro'
import ProductList from '../Mobile/ProductList'
import CampaignCardDesktop from './CampaignCardDesktop'
import CocktailsDesktop from './CocktailsDesktop'
import ProfileDesktop from './ProfileDesktop'
import StoryToShop from '../Mobile/StoryToShop'

function DesktopSide({
  data,
  count,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
}) {
  return (
    <Wrapper>
      <StoryToShop
        count={count}
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
