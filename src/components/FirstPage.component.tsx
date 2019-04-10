import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const FirstPage = ({}) => (
    <>
        <Text style={style.title}>Drink water is a useful habit!</Text>

        <Text>We will help nurture it</Text>
    </>
);

const style = StyleSheet.create({
    title: {
        fontSize: 25
    }
})
