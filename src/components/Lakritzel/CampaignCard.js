import styled from 'styled-components'

function campaignCard(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt="Lakritzel escalates quickly"></Image>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: white;
  width: 22rem;
  height: 25rem;
  gap: 5px;
`

const Image = styled.img`
  margin: 0 auto;
  height: 20rem;
`

export default campaignCard
