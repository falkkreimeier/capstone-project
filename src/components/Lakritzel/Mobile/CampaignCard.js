import styled from 'styled-components/macro'

function campaignCard(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt="Lakritzel escalates quickly"></Image>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: white;
  width: 352px;
  height: 400px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1000px) {
    margin: 0;
    height: 320px;
  }
`

const Image = styled.img`
  margin: 0 auto;
  height: 320px;
  @media only screen and (min-width: 1000px) {
    height: 280px;
  }
`

export default campaignCard
