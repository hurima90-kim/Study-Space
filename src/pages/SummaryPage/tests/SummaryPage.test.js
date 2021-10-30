import { render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "Can you check the order?",
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", {
    name: "Confirm order",
  });
  expect(confirmButton.disabled).toBeTruthy();
});
