import React from "react";
import {Formik} from 'formik';
import {AuthConfigInterface} from "./types";
import {FormikInput} from "./components/FormikInput";
import {View} from "react-native";
import {Button} from "./components/Button";
import {FormikDecorationLine} from "./components/styles";

interface AuthFormikWrapperProps {
    config: AuthConfigInterface[];
    label: string;
}

export const AuthFormikWrapper: React.FC<AuthFormikWrapperProps> = ({config, label}) => {
    return <Formik initialValues={{}} onSubmit={() => console.log(12)}>
        {({values}) => <View style={{marginTop: 35}}>
            {config.map((el: AuthConfigInterface) => <FormikInput config={el} key={`auth-input-${el.name}`}/>)}
            <FormikDecorationLine/>
            <Button onPress={() => console.log(values)} label={label}/>
        </View>}
    </Formik>
}