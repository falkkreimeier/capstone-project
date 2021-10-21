import styled from 'styled-components'
import { Headline } from './Profile'

function Welcome() {
  return (
    <Wrapper>
      <Headline>Programierer, Texter, Weltenretter!</Headline>
      <Text>
        und damit herzlich Willkommen! Ich bin Falk aka Kritzelkopf und ich habe
        die Welt gerettet – vor Lakritzel. Denn dieser übergeschnapste kleine
        Tropfen ist ein echter Unruhestifter. Egal wo er auftaucht, versucht er
        die Menschen davon zu überzeugen ihn zu Schlucken. <br /> <br />
        Unheimlich süß, raffiniert salzig und köstlich nach Lakritz duftend,
        verführt er unschuldige Seelen um ihren Verstand zu rauben, sie auf
        Tischen tanzen zu lassen, und tiefgründige Gespräche über das Leben zu
        führen. Hütet euch vor dem dunklen Wahnsinn.
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
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const Text = styled.p`
  margin: 0px 0px 20px 0px;
  font-family: 'Inter', sans-serif;
`

export default Welcome
