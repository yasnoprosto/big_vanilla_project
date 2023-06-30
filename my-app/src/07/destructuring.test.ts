import {ManType} from "./ManComponent";

export let props: ManType;
beforeEach(() => {
    props = {
        name: "Denis",
        age: 29,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"},],
        address : {
            street: {
                title: "street"
            }
        }
    }
})

test("", () => {

// const [age, name, lessons, a] = [props.age, props.name, props.lessons, props.age]
    const {age, name, lessons} = props
    const streetTitle = props.address.street.title
    const [,ls2, ...restLessons] = props.lessons

    expect(age).toBe(29);
    expect(name).toBe("Denis");
    expect(lessons.length).toBe(3);
    expect(streetTitle).toBe("street")
    expect(ls2.title).toBe("2")
    expect(restLessons.length).toBe(1 )
    expect(restLessons[0]).toStrictEqual({title: "3", name: "react"})


})
