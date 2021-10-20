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
      <LinkToBlog href="https://www.maredo.com/flanksteak-interview-mit-dem-maredo-fleischexperten-martin-ostermeier/">
        weiterlesen
      </LinkToBlog>
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

const LinkToBlog = styled.a`
  text-align: center;
  margin: 0 auto;
  width: 130px;
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
