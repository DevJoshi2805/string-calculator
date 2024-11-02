import add from "./calculator";

describe('String Calculator', () => {
    test('returns 0 for empty strings', () => { 
        expect(add('')).toBe(0);
    });

    test(`returns 1 for string '1' `, () => { 
        expect(add('1')).toBe(1);
    })

    test(`returns 3 for string '1,2' `, () => { 
        expect(add('1,2')).toBe(3);
    })
    test(`returns 10 for string '1, 2, 2, 1, 4' `, () => { 
        expect(add('1, 2, 2, 1, 4')).toBe(10);
    })
})