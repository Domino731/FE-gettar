export enum AUTH_TABS_INDEX {
    LOGIN = 0,
    REGISTER = 1,
    PASSWORD_RECOVERY = 2
}

export interface AuthConfigInterface {
    name: string;
    label: string;
}