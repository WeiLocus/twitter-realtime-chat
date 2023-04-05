import styled from 'styled-components';
import { Header } from '../components';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
`;

const StyledListItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: calc(50px + 0.5rem) 1fr;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;

export default function PublicChatPage() {
  return (
    <>
      <Header headerText="上線使用者(5)" />
      <StyledDiv>
        <StyledListItem>
          <img src="http://placekitten.com/g/200/300" alt="avatar" />
          <div>
            <b>name</b>
            <span>@account</span>
          </div>
        </StyledListItem>
      </StyledDiv>
    </>
  );
}
