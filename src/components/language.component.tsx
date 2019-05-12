import React from 'react';
import {Icon, Picker, View} from "native-base";
import {Languages} from "../i18n/languages.enum";

export const LanguagePiker = (props: any) => {

    const {selected, setLanguages, i18n} = props;

    return (
        <View style={{marginLeft: 0}}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-forward"/>}
                placeholderStyle={{color: "#bfc6ea"}}
                placeholderIconColor="#007aff"
                style={{width: undefined}}
                selectedValue={selected}
                onValueChange={(value: string) => setLanguages(value)}>
                {
                    Object.keys(Languages)
                        .map((lng, index) => <Picker.Item key={index} label={i18n.t(`languages.${lng}`)}
                                                          value={lng}/>)
                }
            </Picker>
        </View>
    )
};
