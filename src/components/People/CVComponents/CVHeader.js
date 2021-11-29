import styled from "styled-components/macro";

function CVHeader() {
  return (
    <HeaderEl>
      <Headline>Falk Kreimeier</Headline>
      <Text>Junior Web Developer</Text>
    </HeaderEl>
  );
}

const HeaderEl = styled.div`
  position: relative;
  right: 40px;
  background-color: white;
  margin: 20px auto;
  width: 270px;
  height: 110px;
  border: 1px solid black;
  z-index: 20;
`;

const Headline = styled.h2`
  position: relative;
  left: 60px;
  bottom: 10px;
  font-family: var(--main-Headline);
  font-size: 2rem;
`;

const Text = styled.p`
  position: relative;
  left: 60px;
  bottom: 50px;
  font-family: var(--main-font);
  font-size: 1.1rem;
`;

export default CVHeader;
