import styled from 'styled-components'

function ProductCard(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt="A bottle of Lakritzel" />
      <Price>{props.price}</Price>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 10px auto;
  display: grid;
  grid-template-areas:
    'image price'
    'image button';
  border-radius: 19px;
  width: 23rem;
  background-color: white;
  margin: 0 auto;
`

const Image = styled.img`
  grid-area: image;
  height: 20rem;
  border-radius: 15px;
  margin: 0;
`

const Price = styled.div`
  position: relative;
  top: 40px;
  right: 90px;
  font-family: wisdom;
  grid-area: price;
  font-size: 3rem;
`

export default ProductCard
