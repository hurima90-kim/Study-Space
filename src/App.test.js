import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘리멘트에 접근
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘리멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});
