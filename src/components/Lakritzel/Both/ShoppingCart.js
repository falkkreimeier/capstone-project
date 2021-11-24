import { useState } from 'react'
import styled from 'styled-components/macro'
import bottle from '../Assets/painted-bottle.jpg'
import OrderingForm from '../Mobile/OrderingForm'
import useOrder from '../../../hook/useOrder'
import { FaArrowCircleLeft as ArrowLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function ShoppingCard({
  onFlipToShopButtonClick,
  count,
  setCount,
  ClickUpHandler,
  ClickDownHandler,
  onHandleChange,
}) {
  const { handleAddOrder } = useOrder()
  //   const [count, setCount] = useState(0)

  //   const handleChange = event => {
  //     setCount(event.target.value)
  //   }

  //   function ClickDownHandler() {
  //     if (count > 0) {
  //       setCount(count - 1)
  //     }
  //   }

  //   function ClickUpHandler() {
  //     setCount(count + 1)
  //     saveToLocal('quantity', value)
  //   }

  const [showOrderingFormAnimation, setShowOrderingFormAnimation] = useState(
    false
  )
  function onOrderButtonClickHandler() {
    if (count === 0) {
      return alert('Bitte Menge angeben')
    } else {
      setShowOrderingFormAnimation(true)
    }
  }

  function onShopButtonClickHandler() {
    setShowOrderingFormAnimation(false)
  }

  if (showOrderingFormAnimation) {
    return (
      <Wrapper>
        <OrderingForm
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
          <ArrowLeft onClick={onFlipToShopButtonClick} />
        </IconContext.Provider>
      </IconPosition>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  width: var(--main-width);
  border-radius: var(--border-radius);
`
const Headline = styled.h2`
  font-family: ventana;
  margin-bottom: 0;
`

const InputQuantity = styled.input`
  border: none;
  text-align: center;
  width: 160px;
  height: 20px;
`

const Image = styled.img`
  height: 220px;
  @media (min-width: 1000px) {
    margin-top: 50px;
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
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const ButtonOrdering = styled.button`
  font-family: ventana;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  width: 145px;
  height: 40px;
  margin: 14px 5px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const IconPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 0px 250px;
`

export default ShoppingCard
