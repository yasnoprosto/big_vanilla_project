import {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Lesson[]
    address: {
        street: {
            title: string
        }
    }
}

type Lesson = {
    title: string
    name?: string
}

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man, ...restProps} = props



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )
}