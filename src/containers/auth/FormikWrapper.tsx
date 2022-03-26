import React from "react";
import {Formik} from 'formik';
import {AuthConfigInterface} from "./types";
import {FormikInput} from "./components/FormikInput";
import {View} from "react-native";

interface AuthFormikWrapperProps {
    config: AuthConfigInterface[];
}

export const AuthFormikWrapper: React.FC<AuthFormikWrapperProps> = ({config}) => {
    return <Formik initialValues={{}} onSubmit={() => console.log(12)}>
        <View>
            {config.map((el: AuthConfigInterface) => <FormikInput config={el} key={`auth-input-${el.name}`}/>)}
        </View>
    </Formik>
}