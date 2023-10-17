import { ThemeProvider } from "styled-components/native";
import { render } from "@testing-library/react-native";
import React from "react";
import AppWebView from "../AppWebView";
import theme from "../../global/theme";
import "jest-styled-components";

describe("AppWebView", () => {
  test("renders the component with a link", () => {
    const link = "https://example.com";

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppWebView link={link} />
      </ThemeProvider>
    );

    const webViewText = getByText("Leia o artigo");
    expect(webViewText).toBeTruthy();
  });
});
