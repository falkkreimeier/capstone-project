import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import saveToLocal from '../../../hook/saveToLocal'
import loadFromLocal from '../../../hook/loadFromLocal'

function Cookies() {
  const [removeCookieInfo, setRemoveCookieInfo] = useState(
    loadFromLocal('cookies') || false
  )
  function removeCookieInfoButton() {
    setRemoveCookieInfo(true)
    saveToLocal('cookies', true)
  }
  return (
    <Wrapper removeCookieInfo={removeCookieInfo}>
      <Text>Lakritzel nutzt nur essenzielle Cookies.</Text>
      <Button onClick={removeCookieInfoButton}>Alles klar!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  color: white;
  position: fixed;
  padding: 5px;
  display: flex;
  width: 352px;
  bottom: 90px;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid white;
  z-index: 50;
  ${({ removeCookieInfo }) =>
    removeCookieInfo &&
    css`
      display: none;
    `}
  @media (min-width: 1000px) {
    bottom: 78px;
    width: 1066px;
  }
`

const Text = styled.p`
  margin: 0 auto;
  font-family: var(--main-font);
  font-size: 1rem;
  @media (min-width: 1000px) {
    font-size: 2rem;
    padding-left: 40px;
  }
`

const Button = styled.button`
  position: relative;
  top: 10px;
  right: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  width: 70px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: white;
  color: black;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
  @media (min-width: 1000px) {
    height: 70px;
    width: 140px;
    right: 130px;
    top: 3px;
    font-size: 1rem;
  }
`

export default Cookies
