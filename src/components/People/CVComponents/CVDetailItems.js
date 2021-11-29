import styled from "styled-components/macro";

function CVDetailItems() {
  return (
    <>
      <Headline>Details</Headline>
      <Text>
        Falk Kreimeier <br /> Gesundheitstraße 11 <br /> 42699 Solingen <br />
        Tel.: 0152-05639742 <br /> eMail: f.kreimeier@gmx.net
      </Text>
      <Headline>Skills</Headline>
    </>
  );
}

const Headline = styled.h2`
  text-align: left;
  border-bottom: 1px solid black;
  margin-left: 20px;
  font-size: 0.8em;
  width: 80px;
`;

const Text = styled.p`
  text-align: left;
  padding: 0px 15px 0px 20px;
  font-size: 0.5rem;
`;

export default CVDetailItems;
