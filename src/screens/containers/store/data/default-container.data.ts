import { Unit } from "../../../../utils";

export default [
    {
        id: Math.round(Math.random() * Date.now()) ,
        name: 'Water',
        icon: 'water-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: 100,
    },
    {
        id: Math.round(Math.random() * Date.now()),
        name: 'Milk',
        icon: 'milk-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: 80
    }, {
        id: Math.round(Math.random() * Date.now()),
        name: 'Coffee',
        icon: 'coffee-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: -50
    },
    {
        id: Math.round(Math.random() * Date.now()),
        name: 'Tea',
        icon: 'tea-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: -50
    },
    {
        id: Math.round(Math.random() * Date.now()),
        name: 'Cola',
        icon: 'cola-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: 80
    }, {
        id: Math.round(Math.random() * Date.now()),
        name: 'Orange Juice',
        icon: 'orange-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: -50
    },
    {
        id: Math.round(Math.random() * Date.now()),
        name: 'Beer',
        icon: 'beer-icon.png',
        amount: 200,
        unit: Unit.kg_ml,
        hydro: -50
    }
]
