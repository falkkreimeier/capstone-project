import styled from 'styled-components/macro'
import Shop from '../Mobile/Shop'
import ProductList from '../Mobile/ProductList'
import CampaignCardLink from './CampaignCardLink'
import CocktailsLink from './CocktailsLink'
import ProfileDesktop from './ProfileDesktop'

function DesktopSide({ onAddOrder, data }) {
  return (
    <Wrapper>
      <Shop onAddOrder={onAddOrder} data={data} />
      <ProductList data={data} />
      <CampaignCardLink />
      <CocktailsLink />
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
