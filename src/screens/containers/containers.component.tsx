import React from 'react';
import { Fab, Icon, Thumbnail, View } from "native-base";
import { compose } from "recompose";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { getContainers } from "./store/reducers/containers.reducer";

const style: any = {
    item: {
        height: 70,
        margin: 10,
    },
    grid: {
        flexDirection: 'row',
        backgroundColor: '#BDEEF0',
        padding: 10,
        margin: 10,
        flexWrap: 'wrap',
        overflowY: 'scroll',
        justifyContent: 'space-evenly'
    },
    button: {

    },
    container: {
        flex: 1,
    }
};

const GridButton = ({data}: any) => {
    return (
        <Thumbnail style={{borderColor: 'red', borderWidth: 1}} square
                   source={{uri: `/Users/yoavs/lab/water-reminder-app/assets/containers/${data.icon}`}}/>
    )
};

const List = ({containers}: any) => {
    return (
        containers.map((container: any, index: number) => {
            return (
                <View key={container.id} style={style.item}>
                    <GridButton data={container} />
                </View>
            )
        })
    )
};

const handleOnClick = (navigation: any) => navigation.navigate('AddContainer');

const ContainersComponent = ({containers, navigation}: any) => {

    // useEffect(() => {
    //     navigation.navigate('AddContainer')
    // }, []);

    return (
        <View style={style.container}>
            <View style={style.grid}>
                <List containers={containers}/>
            </View>
            <Fab position="bottomRight" onPress={() => handleOnClick(navigation)}>
                <Icon name="add"/>
            </Fab>
        </View>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        containers: getContainers(state)
    }), null)
)
(ContainersComponent);
