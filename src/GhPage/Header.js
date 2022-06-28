import styled from "styled-components";
import profileImg from "../profile.jpg";

export function SectionHeader() {
  return (
    <Header>
      <img src={profileImg} alt="profileImg" />
      <div>
        <h2>김민준</h2>
        <span>자기소개</span>
      </div>
    </Header>
  );
}

const Header = styled.header`
  margin-bottom: 30px;
  display: flex;

  img {
    height: 200px;
    width: 160px;
    border-radius: 50%;
    margin: 30px 100px 20px 30px;
  }
`;
