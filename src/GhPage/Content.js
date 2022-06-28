import styled from "styled-components";

export function Content() {
  return (
    <Contents className="content">
      <div>
        <h1>career</h1>
        <span>내용</span>
      </div>
      <div>
        <h1>Tool</h1>
        <span>내용</span>
      </div>
      <div>
        <h1>Project</h1>
        <span>내용</span>
      </div>
      <div>
        <h1>Contact</h1>
        <span>내용</span>
      </div>
    </Contents>
  );
}

const Contents = styled.div`
  width: 65%;
`;
