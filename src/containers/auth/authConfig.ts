import {AuthConfigInterface} from "./types";
import {ICON_NAME} from "../../utils/images";

export const LoginConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail',
        iconName: ICON_NAME.mail
    },
    {
        name: 'password',
        label: 'Hasło',
        iconName: ICON_NAME.lock
    }
];

export const RegisterConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail',
        iconName: ICON_NAME.mail
    },
    {
        name: 'password',
        label: 'Hasło',
        iconName: ICON_NAME.lock
    },
    {
        name: 'passwordRepeat',
        label: 'Powtórz hasło',
        iconName: ICON_NAME.lock
    }
];

export const PasswordRecoveryConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail',
        iconName: ICON_NAME.mail
    }
];
