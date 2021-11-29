import styled from "styled-components/macro";

function Header() {
  return (
    <Wrapper>
      <Headline>Falk Kreimeier</Headline>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  background: white;
  color: black;
  border-radius: 5px;
  padding: var(--main-padding);
  @media (max-width: 375px) {
    max-width: 410;
  }
`;

const Headline = styled.h1`
  font-family: var(--main-Headline);
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin: 0px 0px 2px 0px;
  text-decoration: none;
`;

export default Header;
