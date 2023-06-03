import {ages, courses} from "./filter";

test("should filter people younger than 50", () => {

    const agesOlderThan50 = ages.filter(ageLimit=> ageLimit > 50);

    expect(agesOlderThan50.length).toBe(4);
    expect(agesOlderThan50[0]).toBe(60);

})

test("should filter courses more expensive than 160", () => {

    const coursesUnder160 = courses.filter(course => course.price < 160);

    expect(coursesUnder160.length).toBe(1);
    expect(coursesUnder160[0].price).toBe(100);

})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Learn Filter", isDone: false},
        {id: 2, title: "Learn Map", isDone: false},
        {id: 3, title: "Learn Function", isDone: true},
        {id: 4, title: "Learn Objects", isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(3);
    expect(completedTasks[1].id).toBe(4);




})