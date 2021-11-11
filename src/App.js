import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  /* Adapting based on props */
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
`;

/* Extending Styles :  styled(Box) */
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span``;

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      {/* prop으로 bgColor */}
      <Circle bgColor="tomato"></Circle>
    </Father>
  );
}

export default App;
