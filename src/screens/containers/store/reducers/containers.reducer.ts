import {ADD_CONTAINER} from "../../../../../constants/action-types";
import {Unit} from "../../../../../utils";

const waterContainer = {
    name: 'Water',
    icon: '',
    amount: 200,
    unit: Unit.kg_ml,
    hydro: 100,
};

const milkContainer = {
    name: 'Milk',
    icon: '',
    amount: 200,
    unit: Unit.kg_ml,
    hydro: 80
};

const coffeeContainer = {
    name: 'Coffee',
    icon: '',
    amount: 200,
    unit: Unit.kg_ml,
    hydro: -50
};

const teaContainer = {
    name: 'Tea',
    icon: '',
    amount: 200,
    unit: Unit.kg_ml,
    hydro: -50
};

const initialState = {
    containers: [waterContainer, coffeeContainer, teaContainer, milkContainer]
};

const containersReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case ADD_CONTAINER: {
            return state;
        }

        default: {
            return state
        }
    }
};
