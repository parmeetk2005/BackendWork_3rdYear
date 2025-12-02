const math = require ("./math");
/*
    {
        multiply,
        sub,
        modulo}
*/
// module mocking
jest.mock("./math");
/*
{
    multiply: jest.fn(), // return value is undefined by default
    subtract: jest.fn(),
    modulo: jest.fn()
}
*/
test("multiplication of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6);
    expect (math.multiply(2,3)).toBe(6);
})
test("Sub of 6 and 2 is 4",()=>{
    math.subtract.mockReturnValueOnce(4);  // for syncronic functions but if async then use mockResolvedValueOnce bcz it returns promise
    expect (math.subtract(6,2)).toBe(4);
})
test("modulo of 5 and 2 is 1",()=>{
    math.modulo.mockReturnValueOnce(1);
    expect (math.modulo(5,2)).toBe(1);
})