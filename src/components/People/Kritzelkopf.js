import Header from "./Header";
import Profile from "./Profile";
import Welcome from "./Welcome";
import Interests from "./Interests";
import Skills from "./Skills";
import Facts from "./Facts";
import Portfolio from "./Portfolio";
import Xing from "./Xing";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import TechStack from "./TechStack";
import Footer from "./Footer";
import LinkToCV from "./LinkToCV";
import styled from "styled-components/macro";

function Kritzelkopf() {
  return (
    <Container>
      <Header />
      <Profile />
      <Welcome />
      <Interests />
      <Skills />
      <Facts />
      <Portfolio />
      <TechStack />
      <LinkToCV />
      <Xing />
      <Github />
      <LinkedIn />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1000px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "profile welcome welcome welcome"
    "profile interests skills portfolio"
    "facts xing github linkedin"
    "facts techstack linktocv linktocv"
    "footer footer footer footer";
  grid-gap: 2px;
  text-align: center;
  font-family: "PT Serif", serif;

  @media (max-width: 800px) {
    width: 375px;
    grid-gap: 2px;
    grid-template-areas:
      "header"
      "profile"
      "welcome"
      "interests"
      "facts"
      "skills"
      "techstack"
      "portfolio"
      "linktocv"
      "xing"
      "github"
      "linkedin"
      "footer";
  }
`;

export default Kritzelkopf;
