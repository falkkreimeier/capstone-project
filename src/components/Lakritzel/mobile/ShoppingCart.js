import { useState } from 'react'
import styled from 'styled-components/macro'
import bottle from '../Assets/painted-bottle.jpg'
import OrderingForm from './OrderingForm'
import useOrder from '../../../hook/useOrder'
import { FaArrowCircleLeft as ArrowLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function ShoppingCard({
  count,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
  onShoppingCardButton,
}) {
  const { handleAddOrder } = useOrder()
  const [showOrderingForm, setShowOrderingForm] = useState(false)
  function onOrderButtonClickHandler() {
    if (count === 0) {
      return alert('Bitte Menge angeben')
    } else {
      setShowOrderingForm(true)
    }
  }

  function onShopButtonClickHandler() {
    setShowOrderingForm(false)
  }

  if (showOrderingForm) {
    return (
      <Wrapper>
        <OrderingForm
          onShoppingCardButton={onShoppingCardButton}
          onAddOrder={handleAddOrder}
          onShopButtonClick={onShopButtonClickHandler}
          count={count}
          ClickUpHandler={ClickUpHandler}
          ClickDownHandler={ClickDownHandler}
          onHandleChange={onHandleChange}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Headline>Warenkorb</Headline>
      <Image src={bottle} alt="" />
      <InputContainer>
        <InputQuantity value={count} onChange={onHandleChange} />
      </InputContainer>
      {count > 0 ? (
        <Price>
          {count * 18}€ <br /> <Shipping>plus 5€ Versand</Shipping>
        </Price>
      ) : (
        ''
      )}
      <ButtonContainer>
        <Button onClick={ClickDownHandler}> - </Button>
        <Button onClick={ClickUpHandler}>+</Button>
      </ButtonContainer>
      <ButtonOrdering
        activeClassName="active"
        onClick={onOrderButtonClickHandler}
      >
        Hol mich hier raus!
      </ButtonOrdering>
      <IconPosition>
        <IconContext.Provider
          value={{
            color: 'black',
            size: '30px',
          }}
        >
          <ArrowLeft onClick={onShoppingCardButton} />
        </IconContext.Provider>
      </IconPosition>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  --card-height: 500px;
  height: var(--card-height);
  grid-area: shop;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5px;
  background-color: white;
  width: var(--main-width);
  border-radius: var(--border-radius);
  @media (min-width: 1000px) {
    margin-bottom: 0;
    --card-height: 645px;
  }
`
const Headline = styled.h2`
  font-family: ventana;
  margin: 20px auto 10px auto;
  @media (min-height: 668px) {
    --card-height: 645px;
  }
`

const InputQuantity = styled.input`
  border: none;
  text-align: center;
  width: 160px;
  height: 20px;
`
const Price = styled.div`
  font-family: ventana;
  font-size: 2.4rem;
  position: relative;
  left: 110px;
  bottom: 305px;
  margin: -28px auto;
  @media (min-width: 1000px) {
    margin: -30.5px auto;
    bottom: 300px;
  }
`

const Shipping = styled.p`
  font-family: ventana;
  font-size: 1.3rem;
  margin: -10px auto;
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`

const Image = styled.img`
  height: 250px;
  @media (min-width: 1000px) {
    margin-top: 20px;
    height: 300px;
  }
`

const InputContainer = styled.div`
  margin: 7px;
  width: 180px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
  @media (min-width: 1000px) {
    width: 220px;
    margin: 9px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  width: 80px;
  height: 35px;
  margin: 14px 5px;
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

const ButtonOrdering = styled.button`
  font-family: ventana;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  width: 173px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
  @media (min-height: 668px) {
    margin: 14px 5px;
  }
`

const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -38px 0px 20px 250px;
`

export default ShoppingCard
