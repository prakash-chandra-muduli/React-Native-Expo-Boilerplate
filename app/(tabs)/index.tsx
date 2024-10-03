import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
} from "react-native";

import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { Images } from "@/constants/Images";
import { Strings } from "@/constants/Strings";
import Constants from "expo-constants";

export default function HomeScreen() {
  const apiUrl = Constants.expoConfig.extra.apiUrl;
  const environment = Constants.expoConfig.extra.environment;

  console.log(apiUrl);
  console.log(environment);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText>{`${Strings["appName"]} -  ${environment}`}</ThemedText>
        <Image source={Images["icon"]} />
        <ThemedText>Home Screen</ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
