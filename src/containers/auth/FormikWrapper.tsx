import React from "react";
import {Formik} from 'formik';
import {AuthConfigInterface} from "./types";
import {Input} from "./components/Input";
import {View} from "react-native";

interface AuthFormikWrapperProps {
    config: AuthConfigInterface[];
}

export const AuthFormikWrapper: React.FC<AuthFormikWrapperProps> = ({config}) => {
    return <Formik initialValues={{}} onSubmit={() => console.log(12)}>
        <View>
            {config.map((el: AuthConfigInterface) => <Input config={el} key={`auth-input-${el.name}`}/>)}
        </View>
    </Formik>
}