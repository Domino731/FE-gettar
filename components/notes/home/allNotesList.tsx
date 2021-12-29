import React, { FunctionComponent } from "react";
import { View, StyleSheet , Dimensions} from "react-native";
import { theme } from "../../../styles/theme";
import { NoteSmall } from "./NoteSmall";

export const AllNotesList : FunctionComponent = () => {
    return <View style={styles.container}>
        <NoteSmall location={'right'}/>
        <NoteSmall location={'left'}/>
    </View>
}

const styles = StyleSheet.create({
container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 18,
    width: '100%',
    height: Dimensions.get('window').height - 140,
}
});