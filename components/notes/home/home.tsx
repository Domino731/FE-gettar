import React, { FunctionComponent } from "react"
import { View, Text, StyleSheet } from "react-native"
import { AllNotesList } from "./allNotesList"
import { Button } from "./button"

export const Home : FunctionComponent = () => {
    return <View style={styles.container}>
        <Button/>
        <AllNotesList/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight: 12,
    }
})