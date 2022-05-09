const mail = require('../images/mail.png');
const lock = require('../images/lock.png');

export enum ICON_NAME {
    mail = 'mail',
    lock = 'lock'
}

export const getImageSource = (iconName: keyof typeof ICON_NAME) => {
    switch (iconName) {
        case ICON_NAME.mail:
            return mail;
        case ICON_NAME.lock:
            return lock;
        default:
            return lock;
    }
}