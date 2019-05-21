import {formatArea, formatNumber} from './number-formatter';

describe('Number formatted', () => {
    let stringValue;

    describe('Given a string value', () => {
        beforeEach(() => {
            stringValue = '100000';
        });

        describe('Formatting to an area display', () => {
            it('should return a formatted value for area', () => {
                const expectedAreaValue = '100,000 m2';

                expect(formatArea(stringValue)).toBe(expectedAreaValue);
            });
        });

        describe('Formatting to a default display', () => {
            it('should return a formatted default value', () => {
                const expectedAreaValue = '100,000';

                expect(formatNumber(stringValue)).toBe(expectedAreaValue);
            });
        });
    });
});
