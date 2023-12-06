import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";
export default function App() {

  return (
    <View style={styles.container}>
      {/* <Image source={require("./src/assets/logo.png")} style={styles.logo} /> */}
      <Text style={styles.logo}>Password Generator</Text>

      <Text style={styles.title}>20 Caracteres</Text>

      <View style={styles.area}>
        <Slider style={{ height: 50 }} minimumValue={6} maximumValue={20} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3ff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff"
  }
});