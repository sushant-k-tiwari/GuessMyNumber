import { Text, View, StyleSheet, Dimensions} from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.primaryText,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },

    numberText:{
        color: Colors.primaryText,
        fontSize: 36,
        // fontWeight: "bold",
        fontFamily: 'open-sans-bold'

    },
});