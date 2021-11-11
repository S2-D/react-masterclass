import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 10px;
`;

function App() {
  return (
    <Father>
      <Btn>log in</Btn>
      {/* Button 컴포넌트의 스타일은 그대로 쓰고싶지만, 태그의 종류를 a 태그로 바꾸고 싶을땐 'as' 속성 이용*/}
      <Btn as="a" href="/">
        log in
      </Btn>
    </Father>
  );
}

export default App;
