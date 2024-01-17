import { Text, StyleSheet, Platform } from "react-native";

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: "white",
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 0 : 2,
        borderWidth : Platform.select({ios: 1, android: 0}),
        borderColor: "white",
        padding: 16,
        marginVertical: 25,
        maxWidth: '90%',
        width: 300,

    }
}
);