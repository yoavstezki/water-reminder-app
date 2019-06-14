import React from 'react';
import {Col, Container, Grid, Left, ListItem, Right, Row, Text} from "native-base";
import LanguagePiker from "../../../components/language-picker.component";
import SexPicker from "../../../components/sex-picker.component";
import UnitsPicker from "../../../components/units-picker.component";
import WeightPicker from "../../../components/weight-picker.component";
import {setWeightPickerVisible} from "../../../store/ui/actions/set-weight.action";

const styles = {
    container: {
        backgroundColor: "#FFF"
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15
    },
    containerRow: {
        flex: 1, height: 50
    }
};

const SettingComponent = (props: any) => {
    const {
        i18n,
        setLanguages,
        setSex,
        setUnit,
        setSexPickerVisible,
        setLanguagePickerVisible,
        setUnitsPickerVisible,
        setWeightPickerVisible,
        settings: {sexPickerVisible, languagePickerVisible, unitsPickerVisible, lng},
        registration: {sex, unit, weight}
    } = props;

    return (
        <Container style={styles.container}>
            <ListItem itemDivider>
                <Text>{i18n.t('settings.selection_one.header')}</Text>
            </ListItem>

            <ListItem onPress={() => setLanguagePickerVisible(true)}>
                <Left>
                    <Container style={styles.containerRow}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text>{i18n.t('settings.selection_one.languages')}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text>{i18n.t(`languages.${lng}`)}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Left>
                <LanguagePiker
                    language={lng}
                    setVisible={setLanguagePickerVisible}
                    visible={languagePickerVisible}
                    onSelect={setLanguages}/>
                <Right/>
            </ListItem>

            <ListItem onPress={() => setSexPickerVisible(true)}>
                <Left>
                    <Container style={styles.containerRow}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text>{i18n.t('settings.selection_one.sex')}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text>{i18n.t(`settings.sex.${sex}`)}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Left>
                <SexPicker sex={sex} onSelect={setSex} setVisible={setSexPickerVisible} visible={sexPickerVisible}/>
            </ListItem>

            <ListItem onPress={() => setUnitsPickerVisible(true)}>
                <Left>
                    <Container style={styles.containerRow}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text>{i18n.t('settings.selection_one.units')}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text>{i18n.t(`settings.units.${unit}`)}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Left>
                    <UnitsPicker unit={unit} onSelect={setUnit} setVisible={setUnitsPickerVisible} visible={unitsPickerVisible}/>
            </ListItem>

            <ListItem onPress={() => setWeightPickerVisible(true)}>
                <Left>
                    <Container style={styles.containerRow}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text>{i18n.t('settings.selection_one.weight')}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text>{weight}</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Left>
                <WeightPicker />
            </ListItem>

        </Container>
    )
};


export default SettingComponent;
