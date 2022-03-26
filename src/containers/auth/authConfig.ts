import {AuthConfigInterface} from "./types";

export const LoginConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail'
    },
    {
        name: 'password',
        label: 'Hasło'
    }
];

export const RegisterConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail'
    },
    {
        name: 'password',
        label: 'Hasło'
    },
    {
        name: 'passwordRepeat',
        label: 'Powtórz hasło'
    }
];

export const PasswordRecoveryConfig: AuthConfigInterface[] = [
    {
        name: 'eMail',
        label: 'E-mail'
    }
];
