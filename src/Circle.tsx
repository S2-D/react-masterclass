import { prototype } from "core-js/core/dict";
import styled from "styled-components";

// interface : 타입스크립트의 객체 타입을 정의
interface CircleProps {
  bgColor: string;
}
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({ name: "nico", age: 12 });
// sayHello({ name: "nico", age: 12, hello: 1 });
// proptypes는 코드 실행 이후 에러발생 & typescript는 실행 전에 알림
