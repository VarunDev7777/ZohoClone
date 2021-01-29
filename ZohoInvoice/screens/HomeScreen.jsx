import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <Text>Home Screen</Text>
            <Button title="Registration" onPress={() => navigation.navigate('Registration')} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HomeScreen
