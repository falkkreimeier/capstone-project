import styled from 'styled-components'

function Welcome() {
  return (
    <Wrapper>
      <Headline>Programmierer, Texter, Weltenretter</Headline>
      <Text>
        Und damit herzlich Willkommen. Ich bin Falk aka Kritzelkopf und ich habe
        die Welt gerettet – vor Lakritzel. <br /> <br />
        Denn dieser übergeschnapste kleine Tropfen ist ein echter Unruhestifter.
        Egal wo er auftaucht, stiftet er Chaos. Deshalb habe ich ihn eingeperrt,
        in einer Flasche
        <br /> <br />
        Unheimlich süß, raffiniert salzig und köstlich nach Lakritz duftend,
        verführt er unschuldige Seelen, um ihren Verstand zu rauben, sie auf
        Tischen tanzen zu lassen, und tiefgründige Gespräche über das Leben zu
        führen – das ist der dunkle Wahnsinn.
        <br /> <br />
        Diese und viele andere meiner vermeintlichen Heldentaten findet ihr
        hier.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  border: 20px solid white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const Text = styled.p`
  margin: 0px 0px 20px 0px;
  font-family: 'Inter', sans-serif;
`
const Headline = styled.h2`
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin: 10px 0px 5px 0px;
  color: white;
`

export default Welcome
