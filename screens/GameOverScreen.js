import { Text, View, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameScreen from "./GameScreen";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

  const {width, height} = useWindowDimensions();
  let imageSize = 300;

  if(width < 380 ){
    imageSize = 150;
  }

  if (height < 400) {
     imageSize = 120;
  }

  const imageStyle = {
    width : imageSize,
    height : imageSize,
    borderRadius : imageSize / 2,
  }

  return (
    <ScrollView>
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Computer took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
      your number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Restart</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: 150,
    // height: 300,
    // width: 300,
    borderWidth: 2,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },  
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign : "center",
    marginVertical: 28,
    marginBottom: 48,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
