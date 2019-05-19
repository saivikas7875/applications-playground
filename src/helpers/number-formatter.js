import BigNumber from 'bignumber.js';

const areaFormat = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 3,
    suffix: ' m2'
};

const defaultNumberFormat = {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 3
};

export const formatArea = area => new BigNumber(area).toFormat(areaFormat);

export const formatNumber = area => new BigNumber(area).toFormat(defaultNumberFormat);
