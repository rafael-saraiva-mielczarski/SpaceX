import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react-native";
import React from "react";
import Error from "../Error";
import theme from "../../global/theme";

describe("Error", () => {
  it("renders children with the provided theme", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Error>An error occurred.</Error>
      </ThemeProvider>
    );

    const errorText = getByText("An error occurred.");
    expect(errorText).toBeTruthy();
  });
});
