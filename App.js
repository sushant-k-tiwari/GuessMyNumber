import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font'
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] =useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

    if (!fontsLoaded) {
      return <AppLoading/>;    
    }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  
  function gameOverHandler(numberOfRounds){
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>;
  }

  if (gameOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={[Colors.primary800, Colors.primaryText]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.30,
  }
});
