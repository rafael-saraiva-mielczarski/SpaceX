import { ThemeProvider } from "styled-components/native";
import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import Input from "../Input";
import theme from "../../global/theme";

describe("Input Component", () => {
  test("renders and handles user input", () => {
    const placeholderText = "Enter text";
    const onChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input
          textInputConfig={{
            placeholder: placeholderText,
            onChangeText,
          }}
        />
      </ThemeProvider>
    );

    const inputElement = getByPlaceholderText(placeholderText);

    const userInput = "Test input";
    fireEvent.changeText(inputElement, userInput);

    expect(onChangeText).toHaveBeenCalledWith(userInput);
  });
});
