import {sum} from "./sum";

describe('sum', function () {
    test('positive', () => {
        expect(sum(5, 5)).toBe(10);
    })

    test('negative', () => {
        expect(sum(-5, -5)).toBe(-10);
    })

    test('positive and negative', () => {
        expect(sum(10, -4)).toBe(6);
    })

    test('with zero', () => {
        expect(sum(0, 7)).toBe(7);
    })

    test('both zero', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test('decimal numbers', () => {
        expect(sum(2.5, 1.5)).toBe(4);
    })

    test('large numbers', () => {
        expect(sum(1000000, 2500000)).toBe(3500000);
    })
});
