import i18next from 'i18next';
import {reactI18nextModule} from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Welcome to React": "asksakdlslasdk"
        }
    }
};


i18next
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }

    });


export default i18next;
