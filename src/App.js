import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// attrs 라는 속성을 사용해서 고정되는 Props나 다이나믹한 Props, required 기본 Tag의 props 등을 전달
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
function App() {
  return (
    <Father as="header">
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}

export default App;
