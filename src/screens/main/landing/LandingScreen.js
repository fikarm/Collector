import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

export default function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button style={styles.btn} title="Scan" onPress={() => navigation.navigate('Scan')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30
    }
})