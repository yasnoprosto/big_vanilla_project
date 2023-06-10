import {greetingCreator, ManType, people} from "./map";

let students: Array<ManType>;

beforeEach(() => {
    students = people;
});

test("should get array of greetings", () => {
    const messages = greetingCreator(students)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello, Andrew! Welcome to IT-Incubator!");
    expect(messages[1]).toBe("Hello, Denis! Welcome to IT-Incubator!");
    expect(messages[2]).toBe("Hello, Alex! Welcome to IT-Incubator!");


});