export type ManType = {
    name: string,
    age: number,
}

export const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Denis Pochinskiy", age: 30},
    {name: "Alex Bykov", age: 24},
];

const dimychTranformator = (man: ManType) => ({
        stack: ["css", "html", "js", "react", "next", "tdd"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    });

const devs = [{
    stack: ["css", "html", "js", "react", "next", "tdd"],
    firstName: "Andrew", lastName: "Ivanov"
},
    {
        stack: ["css", "html", "js", "react", "next", "tdd"],
        firstName: "Denis", lastName: "Pochinskiy"
    },
    {
        stack: ["css", "html", "js", "react", "next", "tdd"],
        firstName: "Alex", lastName: "Bykov"
    }
];

const devs2 = [
    dimychTranformator(people[0]),
    dimychTranformator(people[1]),
    dimychTranformator(people[2])]

const devs3 = people.map(dimychTranformator)
console.log(devs);
console.log(devs2);
console.log(devs3);

export const greetingCreator = (people: Array<ManType>) => {
    return (
        people.map(p => `Hello, ${p.name.split(" ")[0]}! Welcome to IT-Incubator!`)
    )
}