export const ages: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const agePredicate = (ageLimit: number)=> {
  return ageLimit > 90
}

const oldAges: number[] = [100];

type CoursesType = {
  title: string
  price: number
}

const courses: Array<CoursesType> = [
  {
  title: "CS",
  price: 250,
  },
  {
    title: "HTML",
    price: 100,
  },
  {
    title: "React",
    price: 300,
  }
]

const cheapPredicate = (course: any) => {
  return course.price < 160
}

