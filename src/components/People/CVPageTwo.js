import styled from 'styled-components/macro'
import CVContent2 from '../People/CVComponents/CVContent2'
import CVDetailItems2 from '../People/CVComponents/CVDetailItems2'
import { Link } from 'react-router-dom'

function CVPageTwo() {
  console.log(window.location.pathname)
  return (
    <Wrapper>
      <Details>
        <DetailItemsContainer>
          <CVDetailItems2 />
        </DetailItemsContainer>
      </Details>

      <Content>
        <CVContent2 />
        <LinkToPageOne to="/cvPageOne">Seite 1</LinkToPageOne>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 430px;
  height: 620px;
  margin: 20px auto;
  display: grid;
  grid-gap: 0px;
  grid-template-areas: 'details content2';
  @media (max-width: 400px) {
    max-width: 375px;
  }
`

const Details = styled.div`
  width: 125px;
  grid-area: details;
  border-radius: var(border-radius);
  background-color: lightgrey;
  @media (max-width: 400px) {
    max-width: 375px;
  }
`

const DetailItemsContainer = styled.div`
  margin-top: 40px;
`

const Content = styled.div`
  padding-top: 32px;
  padding-right: 50px;
  background-color: white;
  grid-area: content2;
  width: 310px;
  @media only screen and (max-width: 400px) {
    max-width: 375px;
  }
`

const LinkToPageOne = styled(Link)`
  position: relative;
  bottom: 10px;
  left: 230px;
  text-decoration: none;
  color: white;
  width: 130px;
  border: 1px solid black;
  padding: 0 10px 0 10px;
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

export default CVPageTwo
