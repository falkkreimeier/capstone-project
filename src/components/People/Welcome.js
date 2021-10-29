import styled from 'styled-components/macro'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function Welcome() {
  return (
    <Wrapper>
      <Headline>Der Mensch hinter dem Monster</Headline>
      <Text>
        Hi, ich bin Falk, Programmierer, Werbexter und Weltenretter, denn ich
        habe Lakritzel gefangen. <br /> <br />
        Das übergeschnapste Tröpfchen ist ein echter Unruhestifter. Es raubt
        unschuldigen Seelen den Verstand, lässt sie auf Tischen tanzen, und
        berauschende Gespräche über das Leben führen. VORSICHT: Kann abfüllend
        wirken.
        <br /> <br />
        Diese und viele andere meiner vermeintlichen Heldentaten findet ihr
        hier.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 352px;
  background-image: url(${klecks});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 336px;
  background-color: white;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const Text = styled.p`
  font-size: 13px;
  margin: 0px 20px 20px 20px;
  font-family: var(--main-font);
`
const Headline = styled.h2`
  font-family: var(--main-Headline);
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin: 35px 0px 5px 0px;
  color: white;
`

export default Welcome
