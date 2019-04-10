import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PageViewComponent = ({ Contant }: any) => {
    return (
        <View style={style.page}>
            <Contant />
        </View>
    )
};

const style = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'azure',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    }
});


