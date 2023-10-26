import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

const Scan = () => {
    Camera.getCameraPermissionStatus().catch(error => console.warn(err))

    const device = useCameraDevice('front')

    if (device == null)
        return <Text>No camera</Text>

    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
            <Text>Hello</Text>
        </View>
    )
}

export default Scan

const styles = StyleSheet.create({})