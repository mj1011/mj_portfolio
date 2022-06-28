import styled from "styled-components";

export function SectionNav() {
  return (
    <Nav className="nav">
      <List>
        <div>
          <ion-icon name="newspaper-sharp" /> <span>Career</span>
        </div>
        <div>
          <ion-icon name="build-sharp" /> <span>Tool</span>
        </div>
        <div>
          <ion-icon name="file-tray-full-sharp" /> <span>Project</span>
        </div>
        <div>
          <ion-icon name="call-sharp" /> <span>Contact</span>
        </div>
      </List>
    </Nav>
  );
}

const Nav = styled.div`
  border-right: solid black 5px;
`;

const List = styled.div`
  font-size: 30px;
  margin-right: 130px;

  div {
    &:hover {
      transform: scale(1.1);
    }
    cursor: pointer;
    padding: 5px 10px 5px 10px;
    margin: 35px 10px 35px 10px;
  }

  span {
    margin-left: 20px;
  }
`;
