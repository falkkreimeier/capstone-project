import styled from 'styled-components'
import crazy from '../Assets/der-ballert-noHeadline.png'

function OrderingInfo({ orderingInfo, count }) {
  return (
    <Wrapper orderingInfo={(orderingInfo, count)}>
      <Headline>Endlich frei!</Headline>
      <Image src={crazy} alt="" />
      <Text>
        Willkommen auf der dunklen Seite der Nacht. Kleine Bestellbestätigung
        hab ich dir auch schon geschickt. Zahle jetzt mit PayPal oder per
        Direktüberweisung + 5€ Versand (siehe Bestätigungs-Mail).
      </Text>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="ENREKMUK3UWWN" />
        <input
          type="image"
          src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal."
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  margin: 0 auto;
  height: 500px;
  background-color: white;
`

const Headline = styled.h2`
  margin-top: 20px;
  font-size: 3rem;
`

const Text = styled.p`
  text-align: center;
  font-family: var(--main-font);
  margin-top: -35px;
  padding: 20px;
`

const Image = styled.img`
  margin-top: -90px;
  height: 300px;
`

export default OrderingInfo
