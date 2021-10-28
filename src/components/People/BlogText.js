import styled from 'styled-components/macro'
import { Text } from './Welcome'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

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
  min-height: 22rem;
  background-image: url(${klecks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

const LinkToBlog = styled.a`
  text-align: center;
  margin: 0 auto;
  width: 130px;
  height: auto;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  margin-bottom: 20px;
  border-radius: 40px 40px 40px 40px;
  background-color: white;
  font-family: 'Inter', sans-serif;
  color: black;
  box-shadow: 0 14px 8px rgba(255, 255, 255, 255);
  transform: translateY(-4px);

  &:active {
    box-shadow: 0 2px 4px rgba(255, 255, 255, 100);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Headline = styled.h2`
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin: 90px 20px 5px 0px;
  color: white;
`

export default BlogText
