export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: 20 }
};

export type LaptopType = {
    model: string
};

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
};

export type UserWithBooksType = UserType & {
    books: Array<string>
};

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}


export const makeHairstyle = (u: UserType, power: number) => {
    // copy.hair = copy.hair / power

    return {
        ...u, hair: u.hair / 2
    };
};

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {
        ...user, address: {
            ...user.address, city: city
        }
    };
};

export const upgradeUserLaptop = (user: UserWithLaptopType & UserWithBooksType, newModel: string) => {
    return {
        ...user, laptop: {
            ...user.laptop, model: newModel
        }
    };
};

export const moveUserToOtherHouse
    = (user: UserWithLaptopType & UserWithBooksType, newHouse: number) => {
    return {
        ...user, address: {
            ...user.address, house: newHouse
        }
    };
};

export const addNewBookToUser = (user: UserWithBooksType, newBooks: string[]) => {
    return {
        ...user, books: [
            ...user.books, ...newBooks
        ]
    };
};

export const updateBookToUser = (user: UserWithBooksType, prevValue: string, newValue: string) => {
    return {
        ...user, books: user.books.map(b => b === prevValue ? newValue : b)
    };
};

export const removeBookFromUser = (user: UserWithBooksType, value: string) => {
    return {
        ...user, books: user.books.filter(b => b !== value)
    };
};

export const updateCompanyName = (user: UserWithLaptopType & UserWithBooksType & WithCompaniesType,
                                  id: number,
                                  newTitle: string) => {
    return {
        ...user, companies: [
            ...user.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
        ]
    };
};