import styled from "styled-components/macro";

function CVContent() {
  return (
    <>
      <Headline>Praktische Erfahrung</Headline>
      <SubHeadline>Trainee Web-Developer, neuefische</SubHeadline>
      <Text>
        Aug 2021 - Nov 2021 <br /> Bootcamp zum Web-Developer mit den Inhalten:
        <br /> HTML5, CSS3, JAVASCRIPT, REACT, GIT & GITHUB, NODE.JS, FIGMA,
        MONGODB, MONGOOSE, STORYBOOK, EXPRESS.JS <br /> Gesellenstück:
        Entwicklung eines Onlineshops für meinen Lakritzschnaps.
      </Text>

      <SubHeadline>Copywriter/Redakteur, 12/05 Solutions</SubHeadline>
      <Text>
        Aug 2020 - Feb 2021
        <List>
          <ListItem>
            SEO Texterstellung von Blobs und Websites für Volvo, Toyota,
            Stadtwerke Solingen, Olaf Jansen Immobilien
          </ListItem>
          <ListItem>
            SEA Keyword Erstellung für Google Adwords Anzeigen
          </ListItem>
          <ListItem>
            UX Texte für die interne Unternehmenskommunikation
          </ListItem>
          <ListItem>Social Media Pläne und Content-Entwicklung</ListItem>
          <ListItem>Kundenpräsentation</ListItem>
        </List>
      </Text>
      <SubHeadline>Copywriter, Supersieben</SubHeadline>
      <Text>
        Feb 2020 - Aug 2020
        <List>
          <ListItem>
            Kampagnenentwicklung Funk, Print und Social Media für NETCOLOGNE und
            MAREDO
          </ListItem>
          <ListItem>SEO Texterstellung und Recherche für Blogbeiträge</ListItem>
          <ListItem>Social Media Pläne und Content-Entwicklung</ListItem>
          <ListItem>
            SEA Keyword Erstellung für Google Adwords Anzeigen
          </ListItem>
          <ListItem>Kundenmailings, Flyer und Broschürentexte</ListItem>
        </List>
      </Text>
    </>
  );
}

const Headline = styled.h2`
  text-align: left;
  margin: -10px 0px 0px 10px;
  font-size: 0.9rem;
  font-family: var(--main-Headline);
  border-bottom: 1px solid black;
`;

const SubHeadline = styled.h2`
  text-align: left;
  margin: 5px 0px 0px 10px;
  width: 300px;
  font-size: 0.7rem;
  font-family: var(--main-Headline);
`;

const Text = styled.p`
  text-align: left;
  margin: 0px 10px;
  font-family: var(--main-font);
  font-size: 0.6rem;
`;

const List = styled.ul`
  margin: 0px 0px 10px -25px;
`;

const ListItem = styled.li``;

export default CVContent;
