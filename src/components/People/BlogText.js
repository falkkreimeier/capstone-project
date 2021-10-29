import styled from 'styled-components/macro'
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
  min-height: 352px;
  background-image: url(${klecks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 21rem;
  background-color: white;
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
  border-radius: 40px 40px 40px 40px;
  background-color: white;
  font-family: var(--main-font);
  color: black;
  transform: translateY(-4px);
  &:active {
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const Text = styled.p`
  padding: 15px;
  margin-top: -40px;
  font-family: var(--main-font);
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: white;
`

export default BlogText
