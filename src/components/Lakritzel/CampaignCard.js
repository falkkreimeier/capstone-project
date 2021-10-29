import styled from 'styled-components/macro'

function campaignCard(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt="Lakritzel escalates quickly"></Image>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  margin: 0px auto 5px auto;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: white;
  width: 352px;
  height: 400px;
  gap: 5px;
`

const Image = styled.img`
  margin: 0 auto;
  height: 320px;
`

export default campaignCard
