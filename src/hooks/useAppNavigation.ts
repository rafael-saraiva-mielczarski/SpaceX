import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigation";

export function useAppNavigation() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    return navigation
}