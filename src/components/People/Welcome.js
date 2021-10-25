import styled from 'styled-components'
import klecks from '../Lakritzel/Assets/Kleckse_clean.jpg'

function Welcome() {
  return (
    <Wrapper>
      <Headline>Der Mann hinter dem Monster</Headline>
      <Text>
        Hi, ich bin Falk, Programmierer, Werbexter und Weltenretter, denn ich
        habe Lakritzel gefangen. <br /> <br />
        Das übergeschnapste Tröpfchen ist ein echter Unruhestifter. Es raubt
        unschuldigen Seelen den Verstand, lässt sie auf Tischen tanzen, und
        berauschende Gespräche über das Leben zu führen. VORSICHT: Kann
        abfüllend wirken.
        <br /> <br />
        Diese und viele andere meiner vermeintlichen Heldentaten findet ihr
        hier.
      </Text>
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
  align-items: center;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const Text = styled.p`
  font-size: 13px;
  margin: 0px 20px 20px 20px;
  font-family: 'Inter', sans-serif;
`
const Headline = styled.h2`
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin: 35px 0px 5px 0px;
  color: white;
`

export default Welcome
