import styled from "styled-components/macro";

function CVDetailItems2() {
  return (
    <>
      <Headline>Bildung</Headline>
      <SubHeadline>
        Diplom Copywriter, <br /> Kreativkader
      </SubHeadline>
      <Text>
        Sep 2014 - Sep 2015 <br /> Duale Ausbildung/Studium zum Werbetexter
      </Text>
      <SubHeadline>Schule</SubHeadline>
      <Text>
        Geschwister Scholl Gesamtschule <br /> Juli 2020: Abschluss: Abitur
      </Text>
    </>
  );
}

const SubHeadline = styled.h2`
  line-height: 1.2;
  text-align: left;
  margin: 0 0 -10px 20px;
  width: 300px;
  font-size: 0.7rem;
  font-family: var(--main-Headline);
`;

const Headline = styled.h2`
  text-align: left;
  border-bottom: 1px solid black;
  margin-left: 20px;
  font-size: 0.7em;
  width: 80px;
`;

const Text = styled.p`
  text-align: left;
  padding: 0px 20px 0px 20px;
  font-size: 0.5rem;
`;

export default CVDetailItems2;
