import React from 'react';
import {Container, Row, Text} from "native-base";
import SurfaceComponent from "../../../components/surface.component";

const HomeComponent = (props: any) => {

    return (
        <Container style={{flex: 1, alignItems: 'center'}}>
            <Row style={{height: 50}}>
                <Text>progress bar</Text>
            </Row>
            <Row>
                <SurfaceComponent/>
            </Row>
            <Row>

            </Row>
                
            <Row>

            </Row>
        </Container>
    );
};

export default HomeComponent;
