import { Sex, Unit } from './app.util';

export interface FormulaDailyGoal {
    unit: Unit;
    weight: number;
    sex: Sex
}

const DIVIDE_WIGHT = 40;
const MAX_VALUE = 2500;

const doCompute = (weight: number, sex: Sex) => {
    if (weight < 20) {
        return Math.round(weight / 4) * 100
    }
    const computedValue = Math.min(weight / DIVIDE_WIGHT * 1000, MAX_VALUE);

    return Sex.male === sex ? computedValue : (computedValue - 100);
};

export const getComputeDailyGoal = ({ unit, weight, sex }: FormulaDailyGoal) => {

    if (Unit.lb_oz === unit) {
        const computedValue = doCompute(lbToKg(weight), sex);
        return mlToOz(computedValue)
    }
    return doCompute(weight, sex);
};


export const kgToLb = (weight: number) => {
    return Math.round(weight * 2.205);
};

export const lbToKg = (weight: number) => {
    return Math.round(weight / 2.205);
};

const mlToOz = (value: number) => {
    return Math.round(value / 29.574);
};
