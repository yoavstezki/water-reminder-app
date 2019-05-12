import i18next from 'i18next';
import {reactI18nextModule} from 'react-i18next';
import {Languages} from "./languages.enum";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: (cb: any) => cb('en'),
    init: () => {
    },
    cacheUserLanguage: () => {
    },
};


const resources = {
    EN: {
        translation: {
            "settings": {
                "selection_one": {
                    "header": "General Settings"
                }
            },
            "languages": {
                "EN": "English",
                "IL": "Hebrew"
            }
        }
    },
    IL: {
        translation: {
            "settings": {
                "selection_one": {
                    "header": "הגדרות כלליות"
                }
            },
            "languages": {
                "EN": "אנגלית",
                "IL": "עברית"
            }
        }
    }
};

i18next
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'EN',
        debug: false,
        resources,
        lng: Languages.EN,
        keySeparator: '.', // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18next;
