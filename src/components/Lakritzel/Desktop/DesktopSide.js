import styled from 'styled-components/macro'
import Shop from '../Mobile/Shop'
import ProductList from '../Mobile/ProductList'
import CampaignCardLink from './CampaignCardLink'
import CocktailsLink from './CocktailsLink'
import ProfileDesktop from './ProfileDesktop'
import FooterDesktop from './FooterDesktop'

function DesktopSide({ onAddOrder, data }) {
  return (
    <Wrapper>
      <Shop onAddOrder={onAddOrder} data={data} />
      <ProductList data={data} />
      <CampaignCardLink />
      <CocktailsLink />
      <ProfileDesktop />
      <FooterDesktop />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media only screen and (min-width: 1000px) {
    width: 100vh;
    display: grid;
    grid-gap: 2px;
    grid-template-areas:
      'header header header'
      'campaignLink shop kritzelkopf'
      'productCard shop cocktailsLink'
      'footerDesktop footerDesktop footerDesktop';
  }
`

export default DesktopSide
