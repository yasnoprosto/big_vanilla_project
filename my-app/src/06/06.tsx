import {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value);
    }

    return <div>
        <textarea onChange={onChangeHandler}>dd</textarea>Den


    </div>
}