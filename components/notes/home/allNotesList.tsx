import { onAuthStateChanged } from "firebase/auth";
import React, { FunctionComponent, useEffect, useState } from "react";
import { View, StyleSheet , Dimensions} from "react-native";
import { auth } from "../../../firebase/config";
import { fetchData } from "../../../firebase/fetchData";
import { theme } from "../../../styles/theme";
import { IFNoteData } from "../../../types";
import { NoteSmall } from "./NoteSmall";

export const AllNotesList : FunctionComponent = () => {

    const [notesData, setNotesData] = useState<IFNoteData[]>([]);

    useEffect(()=> {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
              fetchData(user.uid, 'notes', setNotesData);
            }
          });
    }, []);

    return <View style={styles.container}>
        {notesData.map((el , index) => <NoteSmall location={ index % 2 === 0 ? 'left' : 'right'}/>)}
    </View>
}

const styles = StyleSheet.create({
container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 37,
    width: '100%',
    height: Dimensions.get('window').height - 160,
}
});