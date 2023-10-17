import { ThemeProvider } from "styled-components";
import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import AppButton from "../AppButton";
import theme from "../../global/theme";
import "@testing-library/jest-native/extend-expect";
import "jest-styled-components";

describe("AppButton", () => {
  it("renders with default props", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppButton onPress={() => {}}>Click Me</AppButton>
      </ThemeProvider>
    );

    const button = getByText("Click Me");
    expect(button).toBeTruthy();
  });

  it("renders with custom color and background color", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppButton onPress={() => {}} color="black" bgColor="white">
          Click Me
        </AppButton>
      </ThemeProvider>
    );

    const button = getByText("Click Me");

    expect(button).toMatchSnapshot();
  });

  it("triggers the onPress function when clicked", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppButton onPress={onPressMock}>Click Me</AppButton>
      </ThemeProvider>
    );

    const button = getByText("Click Me");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
