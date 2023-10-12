import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { Provider } from "react-redux";
import theme from "./src/global/theme";
import store from "./src/features/store";
import * as SplashScreen from "expo-splash-screen";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded && !fontError) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
}
