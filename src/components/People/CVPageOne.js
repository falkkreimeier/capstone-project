import styled from 'styled-components/macro'
import Profilimg from '../People/Assets/Profilbild.jpg'
import CVSkillList from '../People/CVComponents/CVSkillList'
import CVDetailItems from '../People/CVComponents/CVDetailItems'
import CVHeader from '../People/CVComponents/CVHeader'
import CVContent from '../People/CVComponents/CVContent'
import { Link } from 'react-router-dom'

function CVPageOne() {
  return (
    <Wrapper>
      <Details>
        <Image src={Profilimg} alt="" />
        <DetailItemsContainer>
          <CVDetailItems />
        </DetailItemsContainer>
        <CVSkillList />
      </Details>

      <Content>
        <CVHeader />
        <CVContent />
        <LinkToMainPage to="/kritzelkopf">Hauptseite</LinkToMainPage>
        <LinkToPageTwo to="/lebenslauf2">Seite 2</LinkToPageTwo>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 430px;
  height: 700px;
  margin: 20px auto;
  background-color: black;
  display: grid;
  grid-template-areas: 'details content1';
  @media (max-width: 400px) {
    max-width: 375px;
  }
`

const Details = styled.div`
  margin: 0 auto;
  grid-area: details;
  border-radius: var(border-radius);
  background-color: lightgrey;
  @media only screen and (max-width: 400px) {
    max-width: 375px;
  }
`

const DetailItemsContainer = styled.div`
  margin-top: 40px;
`

const Image = styled.img`
  height: 80px;
  border-radius: 50%;
  margin: 35px 25px -10px 20px;
`

const Content = styled.div`
  background-color: white;
  grid-area: content1;
  @media (max-width: 400px) {
    max-width: 375px;
    height: 100%;
  }
`

const LinkToPageTwo = styled(Link)`
  position: relative;
  top: 80px;
  left: 130px;
  padding: 0 10px 0 10px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  border: 1px solid black;
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

const LinkToMainPage = styled(Link)`
  position: relative;
  top: 80px;
  left: 120px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: white;
  padding: 0 10px 0 10px;
  text-decoration: none;
  border: 1px solid black;
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

export default CVPageOne
