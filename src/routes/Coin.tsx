import { useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        {/* state가 존재할땐 name 보여줌. 주소로 직접 접속하면 Loading 띄움 */}
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
