import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

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

const Emoji = styled.span`
  font-size: 63px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* span대신 Emoji를 target하면 as="p"와 관계없이 적용 & Box > Emoji만 스타일 적용!  */
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
    &:active {
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😉</Emoji> {/* 애니메이션 적용 O */}
      </Box>
      <Emoji as="p">😉</Emoji> {/* 애니메이션 적용 X */}
    </Wrapper>
  );
}

export default App;
