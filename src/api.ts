export function fetchCoins() {
  //coins API를 fetch하고, json 형태 반환하는 함수
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
