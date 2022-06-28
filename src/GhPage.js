import styled from "styled-components";
import { Content } from "./GhPage/Content";
import { SectionHeader } from "./GhPage/Header";
import { SectionNav } from "./GhPage/Nav";

function GhPage() {
  return (
    <>
      <SectionHeader />
      <SectionBoder />
      <Body>
        <SectionNav />
        <Content />
        <SectionSideBorder />
      </Body>
    </>
  );
}

export default GhPage;

const Body = styled.body`
  display: flex;
  justify-content: space-between;
`;

const SectionSideBorder = styled.div`
  border-left: solid black 3px;
`;

const SectionBoder = styled.div`
  width: 80%;
  border-bottom: solid black 3px;
  margin-bottom: 50px;
`;
