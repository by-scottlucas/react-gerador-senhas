import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3ff",
  }
});