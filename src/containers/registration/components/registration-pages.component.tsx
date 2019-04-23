import {Container, Row} from 'native-base'
import React from 'react';

import {Text, View} from 'react-native';
//@ts-ignore
import {Pages} from 'react-native-pages';
import RegistrationComponent from './registration.component';


const RegistrationPagesComponent = (props: any) => {

    return (
        <View style={{flex: 1, backgroundColor: '#263238'}}>
            <Pages indicatorPosition='bottom' indicatorColor='#FF9100' indicatorOpacity={0.54}>
                <Container style={{flex: 1}}>
                    <Row style={{backgroundColor: 'blue'}}>
                        <Text>{props.t('Welcome to React')}</Text>
                    </Row>
                    <Row style={{backgroundColor: 'red'}}>
                        <Text>Row 2</Text>
                    </Row>
                </Container>
                <Container>
                    <RegistrationComponent {...props} />
                </Container>
            </Pages>
        </View>
    );
};

export default RegistrationPagesComponent;
