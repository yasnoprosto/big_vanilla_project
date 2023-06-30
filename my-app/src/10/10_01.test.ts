import {
    addNewBookToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBookFromUser, updateBookToUser, updateCompanyName,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa"
        }
    }
    const cuttedUser = makeHairstyle(user, 2)


    expect(cuttedUser.hair).toBe(5)
    expect(user.hair).toBe(10)
    expect(cuttedUser.address).toBe(user.address)
})

test('change address test', () => {
    let user: UserWithLaptopType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook"
        }
    }



    const newUser = moveUser(user, "Ekb")


    console.log(user === newUser);

    expect(user).not.toBe(newUser)
    expect(user.address).not.toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)

})

test('upgrade laptop', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook M2 Pro 13"
        },
        books: ["CSS", "HTML", "JS", "React"]
    }

    const newUser = moveUserToOtherHouse(user, 120)

    expect(user).not.toBe(newUser)
    expect(user.books).toBe(newUser.books)
    expect(user.address).not.toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.laptop.model).toBe("Macbook M2 Pro 13")


})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook M2 Pro 13"
        },
        books: ["CSS", "HTML", "JS", "React"]
    }

    const newUser = addNewBookToUser(user, ['ts', 'rest api'])

    console.log(newUser);

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop.model).toBe("Macbook M2 Pro 13")
    expect(newUser.books[4]).toBe('ts')
    expect(newUser.books[5]).toBe('rest api')
})

test('update book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook M2 Pro 13"
        },
        books: ["CSS", "HTML", "JS", "React"]
    }

    const newUser = updateBookToUser(user, "JS", "TS")

    console.log(newUser);

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('TS')
    expect(user.books.length).toBe(4)
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook M2 Pro 13"
        },
        books: ["CSS", "HTML", "JS", "React"]
    }

    const newUser = removeBookFromUser(user, "JS")

    console.log(newUser);

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('React')
    expect(newUser.books.length).toBe(3)
    expect(user.books.length).toBe(4)
})

test('comp js book', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa",
            house: 20
        },
        laptop: {
            model: "Macbook M2 Pro 13"
        },
        books: ["CSS", "HTML", "JS", "React"],
        companies: [
            {id: 1, title: "гугл"},
            {id: 2, title: "Microsoft"},
            {id: 3, title: "Vk"}]
    }

    const newUser = updateCompanyName(user, 1, "Google")

    console.log(user);
    console.log(newUser);

    expect(user).not.toBe(newUser)
})