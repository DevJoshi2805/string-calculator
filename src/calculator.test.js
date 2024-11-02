import add from "./calculator";

describe('String Calculator', () => {
    test('returns 0 for empty strings', () => { 
        expect(add('')).toBe(0);
     });

})