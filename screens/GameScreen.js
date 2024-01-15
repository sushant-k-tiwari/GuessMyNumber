import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import {Ionicons} from "@expo/vector-icons"

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() =>{
    minBoundary = 1;
    maxBoundary = 100;
  },[]);

  function nextGuessHandler(direction) {
    //direction => lower or greater
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You really want to win that bad!!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color='white'/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList 
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => item}/>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    padding: 8,
  },

  buttonContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: Colors.primaryText,
    margin: 10,
  },
  listContainer:{
    flex: 1,
    padding: 16
  },
});
