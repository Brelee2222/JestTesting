const thing = require("./index");

const a = 5;

test("should be a + 1", () => {
    expect(thing(a)).toBe(6);
})