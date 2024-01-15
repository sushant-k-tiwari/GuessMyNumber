import { Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Computer's Guess : {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth : 1,
        borderRadius: 8 ,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primaryText,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.35,
        shadowRadius: 3,
    },
    itemText:{
        fontFamily: 'open-sans',
    }
});

