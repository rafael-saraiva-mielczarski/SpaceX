import { render } from "@testing-library/react-native";
import React from "react";
import HrLine from "../HrLine";

describe("HrLine", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<HrLine />);
    const hrLine = getByTestId("hr-line");

    expect(hrLine).toBeTruthy();
  });
});
