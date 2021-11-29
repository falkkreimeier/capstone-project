import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import saveToLocal from '../../../../src/hook/saveToLocal'
import loadFromLocal from '../../../../src/hook/loadFromLocal'

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
      <Text>Lakritzel nutzt nur die essenziellen Cookies.</Text>
      <Button onClick={removeCookieInfoButton}>YEAH!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  position: fixed;
  width: 352px;
  bottom: 90px;
  left: 113px;
  background-color: white;
  border: 1px solid black;
  z-index: 50;
  ${({ removeCookieInfo }) =>
    removeCookieInfo &&
    css`
      display: none;
    `}
`

const Text = styled.p`
  font-family: var(--main-font);
  font-size: 14px;
`

const Button = styled.button`
  position: relative;
  top: 30px;
  right: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  width: 70px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

export default Cookies
