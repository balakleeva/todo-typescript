import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.todos || '[]') as ITodo[]

        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }

        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure you want to remove todo?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler} />

            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}

export default TodosPage