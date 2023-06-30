function increaseAge(user: UserType) {
    user.age++;
}

type UserType = {
    name: string
    age: number
    address?: {
        street: string
    }
}

test("array test", () => {
    const users = [
        {
            name: "Denis",
            age: 29
        },
        {
            name: "Nikita",
            age: 25
        },
    ];

    const admins = users;

    admins.push({name: "Sanya", age: 23})

    expect(users[2]).toEqual({name: "Sanya", age: 23})
});

test("object test", () => {
    const user1: UserType = {
            name: "Denis",
            age: 29
        }

    increaseAge(user1);

    expect(user1.age).toBe(30);

    const newUser = user1;

    newUser.age = 1000;

    expect(user1.age).toBe(1000);
});

test("object test", () => {
    let count = 100

    let newCount = count

    newCount = 75;

    expect(count).toBe(100);
    expect(newCount).toBe(75);
});

test("reference test", () => {
    const user = {
        name: "Klara",
        age: 35,
        address: {
            street: "Volkovskogo"
        }
    }

    const user2 = {
        name: "Roosevelt",
        age: 87,
        address: user.address
    }

    user2.address.street = "Mendeleeva"

    expect(user2.address.street).toBe(user.address.street)
    expect(user.address.street).toBe("Mendeleeva")
});

test("reference test", () => {

    const address = {
        street: "Volkovskogo"
    }

    const user = {
        name: "Klara",
        age: 35,
        address: address
    }

    const user2 = {
        name: "Roosevelt",
        age: 87,
        address: user.address
    }

    const usersArray = [user, user2, {name: "Lesha", age: 17, address: address}]

    const usersOver18 = [user, user2]

    user.age = 30

    expect(user2.address.street).toBe(user.address.street)
    expect(usersArray[0].age).toBe(30)
    expect(usersOver18[0].age).toBe(30)
});