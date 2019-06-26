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
                    "header": "General Settings",
                    "languages": "Languages",
                    "sex": "Sex",
                    "units": "Units",
                    "weight": "Weight",
                },
                "selection_two": {
                    "header": "Daily Goal",
                    "autoCalculate" : {
                        "title":  "Calculate automatically",
                        "subTitle" : "Enter your weight and sex"
                    },
                    "dailyGoal": "Daily Goal"
                },
                "sex": {
                    "male": "male",
                    "female": "female"
                },
                "units": {
                    "kg/ml": "kg/ml",
                    "lb/oz": "lb/oz"
                }
            },
            "languages": {
                "EN": "English",
                "IL": "עברית"
            },
            "picker": {
                "languages": {
                    "title": "Select languages"
                },
                "weight": {
                    "title": "Select weight"
                },
                "dailyGoal": {
                    "title": "Daily Goal"
                }

            }
        }
    },
    IL: {
        translation: {
            "settings": {
                "selection_one": {
                    "header": "הגדרות כלליות",
                    "languages": "שפות",
                    "sex": "מין"
                },
                "sex": {
                    "male": "זכר",
                    "female": "נקבה"
                }
            },
            "picker": {
                "languages": {
                    "title": "בחר שפה"
                }
            },
            "languages": {
                "EN": "English",
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
