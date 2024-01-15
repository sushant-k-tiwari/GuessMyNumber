import { useState } from "react";
import { TextInput, Button, View, StyleSheet, Alert, Text} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({onPickNumber}) {

  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler(enteredText) {
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
      Alert.alert('Invalid Number!', 'Number has to be in the range between 0 to 99.', 
      [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
      <Text style={styles.instruction}>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    alignItems: "center",
    marginTop: 100
  },
  
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryText,
    borderBottomWidth: 2,
    color: Colors.primaryText,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    padding: 8
  },

  buttonContainer: {
    flex: 1,
  },
  instruction: {
    color: Colors.primaryText,
    elevation: 24,
    padding: 16,
    fontSize: 24,
    borderRadius: 50,
  }
});
