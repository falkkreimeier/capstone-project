import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import logo from './Assets/Logo-lettering.jpg'
import crazy from './Assets/Übergeschnapst.jpg'

function AgeGate() {
  const [ageVerification, setAgeVerification] = useState(false)

  return (
    <Wrapper ageVerification={ageVerification}>
      <CardContainer>
        <LogoImg src={logo} alt="Lakritzel Logo" activeClassName="active" />
        <Text>
          Um Zugang zu dieser Seite zu bekommen, musst du mindestens 18 Jahre
          alt sein!
        </Text>
        <Button
          onClick={() => setAgeVerification(!ageVerification)}
          type="button"
        >
          Ich bin schon über 18
        </Button>
        <LinkWrapper>
          <LinkTo exact to="/agefail">
            Ich bin noch keine 18
          </LinkTo>
        </LinkWrapper>
        <Image src={crazy} alt="" />
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100%;
  z-index: 50;
  ${({ ageVerification }) =>
    ageVerification &&
    css`
 animation-duration: 3s;
 animation-name: fadeOut;
 animation-fill-mode: forwards;
 @keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }

 `}
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 auto;
  width: 20rem;
  height: 30rem;
  background-color: white;
`

const LogoImg = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 6rem;
`
const Image = styled.img`
  margin: 10px auto 10px auto;
  justify-self: flex-start;
  height: 14rem;
`

const Button = styled.button`
  font-family: var(--main-font);
  text-align: center;
  border-radius: 19px;
  background-color: black;
  margin: 5px;
  width: 10rem;
  height: 1.5rem;
  color: white;
`
const LinkWrapper = styled.div`
  text-align: center;
  border-radius: 19px;
  background-color: black;
  margin: 5px;
  width: 10rem;
  height: 1.5rem;
  color: white;
  text-decoration: none;
  padding: 2px 6px 2px 6px;
  border-top: 2px solid grey;
  border-right: 2px solid #333333;
  border-bottom: 2px solid #333333;
  border-left: 2px solid grey;
  &:active {
    border-top: 2px solid #333333;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 2px solid #333333;
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: var(--main-font);
  font-size: 13.5px;
  text-align: center;
`

const Text = styled.p`
  text-align: center;
  margin: 0 auto 10px auto;
  font-family: var(--main-font);
`

export default AgeGate
