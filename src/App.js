import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// 애니메이션 : keyframes import 받아야함.
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 모든 태그를 styled-component로 사용할 필요 없음, 자식 스타일 설정 가능 */
  span {
    font-size: 63px;
    /* 여기서 &은 span을 가리킴 */
    &:hover {
      font-size: 20px;
    }
    /* &:active {
      opacity: 0;
    } */
  }
  // &:hover와 같다.
  span:hover {
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <span>😉</span>
      </Box>
    </Wrapper>
  );
}

export default App;
