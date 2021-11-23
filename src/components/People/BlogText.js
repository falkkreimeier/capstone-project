import styled from 'styled-components/macro'

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
      <LinkContainer>
        <LinkToBlog href="https://www.maredo.com/flanksteak-interview-mit-dem-maredo-fleischexperten-martin-ostermeier/">
          weiterlesen
        </LinkToBlog>
      </LinkContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: blog;
  min-height: 352px;
  background-size: 21rem;
  background-color: white;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  margin-bottom: 5px;
  @media (min-width: 1000px) {
    margin: 0;
  }
`

const LinkContainer = styled.div`
  margin: 0px auto;
  width: 130px;
  text-align: center;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  border-radius: 40px;
  background-color: black;
  font-family: var(--main-font);
  box-shadow: 0 14px 8px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transform: translateY(-0px);
    transition: 0.1s;
  }
`

const LinkToBlog = styled.a`
  color: white;
  text-decoration: none;
`

const Text = styled.p`
  padding: 15px;
  margin-top: -40px;
  font-family: var(--main-font);
  color: black;
`

const Headline = styled.h2`
  font-family: var(--main-Headline);
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: black;
`

export default BlogText
