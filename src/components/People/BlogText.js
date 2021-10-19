import styled from 'styled-components'
import { Headline } from './Profile'
import { Text } from './Welcome'

function BlogText() {
  return (
    <Wrapper>
      <Headline>
        Das einzige Steak, das man sich beim Essen versauen kann.
      </Headline>
      <Text>
        Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak,
        Tomahawk Steak...
      </Text>
      <ButtonContainer href="https://www.maredo.com/flanksteak-interview-mit-dem-maredo-fleischexperten-martin-ostermeier/">
        <Button type="button">weiterlesen</Button>
      </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: blogText;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

const ButtonContainer = styled.a`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  min-width: 130px;
  height: 30px;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  margin-bottom: 20px;
  border-radius: 40px 40px 40px 40px;
  background-color: white;
  font-family: 'Inter', sans-serif;
  color: black;
  box-shadow: 5px 5px 10px 5px black;
  &:hover {
    background-color: black;
    box-shadow: 0px 0px 5px 5px grey;
    color: white;
  }
`

export default BlogText
