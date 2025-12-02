let sum = jest.fn(); // to mock the sum function but do not behave like the original one and create new function and by default sum eill return undefinded
// sum.mockReturnValue(5); // all passed and declared globally and value ek baar set krke delete kr deta hai
sum.mockReturnValueOnce(5); // one passed and yaha pe value vohi set rhti hai jb tak next value na de de and har ek testcase k liye alg alg value de skte hai
test("sum of 2 and 3 is 5",()=>{
    // sum.mockReturnValue(5);
    expect(sum(2,3)).toBe(5);
})

test("sum of 2 and 3 is 5",()=>{
    sum.mockReturnValueOnce(7);
    expect(sum(4,3)).toBe(7);
})