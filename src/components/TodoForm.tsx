import React, { useState, useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log('state.title', title)
            // setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // value={title}
                // onChange={changeHandler}
                ref={ref}
                type="text"
                id="title"
                placeholder="Введите дело"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите дело
            </label>
        </div>
    )
}

export default TodoForm