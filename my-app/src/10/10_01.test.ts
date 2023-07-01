import {
    addCompany,
    addNewBookToUser, CompaniesType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBookFromUser, updateBookToUser, updateCompanyName,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test("reference type test", () => {
    let user: UserType = {
        name: "Enphy",
        hair: 10,
        address: {
            city: "Ufa"
        }
    };
    const cuttedUser = makeHairstyle(user, 2);


    expect(cuttedUser.hair).toBe(5);
    expect(user.hair).toBe(10);
    expect(cuttedUser.address).toBe(user.address);
});

test("change address test", () => {
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
    };


    const newUser = moveUser(user, "Ekb");


    console.log(user === newUser);

    expect(user).not.toBe(newUser);
    expect(user.address).not.toBe(newUser.address);
    expect(user.laptop).toBe(newUser.laptop);

});

test("upgrade laptop", () => {
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
    };

    const newUser = moveUserToOtherHouse(user, 120);

    expect(user).not.toBe(newUser);
    expect(user.books).toBe(newUser.books);
    expect(user.address).not.toBe(newUser.address);
    expect(user.laptop).toBe(newUser.laptop);
    expect(user.laptop.model).toBe("Macbook M2 Pro 13");


});

test("add new book to user", () => {
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
    };

    const newUser = addNewBookToUser(user, ["ts", "rest api"]);

    console.log(newUser);

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(user.address).toBe(newUser.address);
    expect(user.laptop.model).toBe("Macbook M2 Pro 13");
    expect(newUser.books[4]).toBe("ts");
    expect(newUser.books[5]).toBe("rest api");
});

test("update book to user", () => {
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
    };

    const newUser = updateBookToUser(user, "JS", "TS");

    console.log(newUser);

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(newUser.books[2]).toBe("TS");
    expect(user.books.length).toBe(4);
});

test("remove js book", () => {
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
    };

    const newUser = removeBookFromUser(user, "JS");

    console.log(newUser);

    expect(user).not.toBe(newUser);
    expect(user.books).not.toBe(newUser.books);
    expect(newUser.books[2]).toBe("React");
    expect(newUser.books.length).toBe(3);
    expect(user.books.length).toBe(4);
});

test("update company name", () => {
    const user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
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
    };

    const newUser = updateCompanyName(user, 1, "Google");

    console.log(user);
    console.log(newUser);

    expect(user).not.toBe(newUser);
    expect(user.companies[0].title).toBe("гугл");
    expect(newUser.companies[0].title).toBe("Google");
});

test("update companies", () => {
    const user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
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
    };

    const companies: CompaniesType = {
        "Denis": [
            {id: 1, title: "Google"},
            {id: 2, title: "Microsoft"},
            {id: 3, title: "Vk"}],
        "Misha": [
            {id: 1, title: "Yandex"},
            {id: 2, title: "Amazon"},
            {id: 3, title: "Netflix"}]
    };

    const newCompany = addCompany(companies, "Denis", "IT-Incubator");

    console.log(user);
    console.log(newCompany);

    expect(user).not.toBe(newCompany);
    expect(newCompany["Denis"][3].title).toBe("IT-Incubator");
    expect(newCompany["Denis"][3].id).toBe(4);
    expect(companies).not.toBe(newCompany);
});