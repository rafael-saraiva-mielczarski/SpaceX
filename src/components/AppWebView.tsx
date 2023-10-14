import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import { deviceWidth } from "../global/styles";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type WebViewProps = {
  link: string;
};

export default function AppWebView({ link }: WebViewProps) {
  return (
    <>
      <WebViewText>Leia o artigo</WebViewText>
      <WebView
        source={{ uri: link }}
        style={styles.container}
        allowsInlineMediaPlayback={false}
      ></WebView>
      <Padding />
    </>
  );
}

const WebViewText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fontSize.l, deviceWidth)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  padding: 20px;
`;

const Padding = styled.View`
  padding-bottom: 200px;
`;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
});
