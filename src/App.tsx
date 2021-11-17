import styled from "styled-components";
import React, { useState } from "react";

function App() {
  //타입스크립트를 사용함으로써 useState는 string 속성을 지킬 수 있다.
  const [value, setValue] = useState("");
  //event도 보호받을 수 있다.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  console.log(value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" />
      </form>
      <button>Log In</button>
    </div>
  );
}

export default App;
