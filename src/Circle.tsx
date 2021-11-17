import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //  useState()안에 default value를 넣어두면 타입스크립트가 알아서 타입 지정해줌.
  const [conter, setConter] = useState(0);
  // 없을 경우 undefined
  const [value, setValue] = useState();
  // 드물게 타입이 string으로 변경될 경우
  const [color, setColor] = useState<string | number>(231);
  setColor("#23497");

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor} /* borderColor 없으면 bgColor */
    >
      {text}
    </Container>
  );
}

export default Circle;
