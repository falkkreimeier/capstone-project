import styled from "styled-components";
import { Headline } from "./Profile";

function Welcome() {
  return (
    <Wrapper>
      <Headline>Oh, ein Gast!</Headline>
      <Text>
        Schön, Sie/Dich kennen zu lernen ... ähh... oder besser gesagt andersrum
        – und damit Herzlich Willkommen! Ich bin Falk, Programmierer,
        Werbetexter, Kaufmann und Schnaps-Dealer. Man könnte sagen, ich habe
        viele Seiten, und das hier ist eine davon. <br /> <br />
        Lakritzel.com, die App und diese Unterseite habe ich komplett
        programmiert und bekritzelt ... textet. Das Zeichnen gehört leider nicht
        zu meinen Stärken, aber dafür kenne ich viele talentierte Art-Directoren
        und Illiustratoren. Wer jetzt denkt: "Sieht geil aus, will ich auch!"
        Unten steht meine Telefonnummer – Einfach anrufen, ich mach das.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  grid-area: welcome;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`;

export const Text = styled.p`
  margin: 0px 0px 20px 0px;
  font-family: "Inter", sans-serif;
`;

export default Welcome;
