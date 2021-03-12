import React from 'react';
import { Col, Container, Row, Text } from "native-base";
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
                <Container>
                    <Row>
                        <Col>
                            <Text>1</Text>
                        </Col>
                        <Col>
                            <Text>2</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text>3</Text>
                        </Col>
                        <Col>
                            <Text>2</Text>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default HomeComponent;
