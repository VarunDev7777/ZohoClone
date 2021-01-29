import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const userReg = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Registration Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default userReg
