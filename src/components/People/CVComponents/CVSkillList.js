import styled from "styled-components/macro";

function CVSkillList() {
  return (
    <List>
      <ListItems>
        React
        <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        Semantisches HTML <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        CSS <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        Node.js <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        Git & Github <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        Figma <br />
        <DotsBlack />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        MongoDB <br />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
        <Dots />
      </ListItems>
      <ListItems>
        ExpressJS <br />
        <DotsBlack />
        <DotsBlack />
        <Dots />
        <Dots />
        <Dots />
      </ListItems>
    </List>
  );
}

const List = styled.ul`
  margin: 0px 0px 0px -20px;
  text-decoration: none;
`;

const ListItems = styled.li`
  margin: 10px;
  font-family: var(--main-font);
  list-style: none;
  text-align: left;
  font-size: 0.7rem;
`;

const Dots = styled.span`
  margin-left: 3px;
  height: 8px;
  width: 8px;
  border: 1px solid black;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`;

const DotsBlack = styled.span`
  margin-left: 3px;
  height: 8px;
  width: 8px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
`;

export default CVSkillList;
