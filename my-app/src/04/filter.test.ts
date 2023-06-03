import {ages} from "./filter";

test("should filter people younger than 50", () => {
    const agesOlderThan50 = ages.filter( a => {
        return (
            a > 50
        )
    });

    expect(agesOlderThan50.length).toBe(4);
    expect(agesOlderThan50[0]).toBe(30);

})