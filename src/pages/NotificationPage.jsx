import styled from 'styled-components';
import { Header } from '../components';

const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
  .title {
    font-size: var(fs-h5);
    font-weight: 700;
    margin: 0.5rem 0;
  }
  p {
    line-height: 1.625rem;
  }
`;

export default function NotificationPage() {
  return (
    <>
      <Header headerText="通知" />
      <StyledList>
        <img src="http://placekitten.com/g/200/300" alt="avatar" />
        <div>
          <div className="title">John有新的推文通知</div>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        </div>
      </StyledList>
      <StyledList>
        <div>
          <img src="http://placekitten.com/g/200/300" alt="avatar" />
          <div className="title">Michael 開始追蹤你</div>
        </div>
      </StyledList>
    </>
  );
}
