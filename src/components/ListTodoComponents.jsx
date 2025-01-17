import React, { useState } from 'react'

const ListTodoComponents = () => {

    const dummyData = [
        {
            "todoId": 1,
            "title": "Learn Java",
            "description": "Study core Java concepts like OOPs, Collections, and Exception Handling.",
            "completed": false
        },
        {
            "todoId": 2,
            "title": "Build a To-Do List App",
            "description": "Develop a simple to-do list application using Spring Boot and React.",
            "completed": false
        },
        {
            "todoId": 3,
            "title": "Read a Book",
            "description": "Finish reading 'The Alchemist' by Paulo Coelho.",
            "completed": false
        },
        {
            "todoId": 4,
            "title": "Go for a Run",
            "description": "Run for at least 30 minutes every morning.",
            "completed": false
        },
        {
            "todoId": 5,
            "title": "Learn to Play Guitar",
            "description": "Practice basic chords and simple songs.",
            "completed": false
        },
        {
            "todoId": 6,
            "title": "Clean the House",
            "description": "Deep clean the entire house, including dusting, vacuuming, and mopping.",
            "completed": true
        }
    ]

    const [todos, setTodos] = useState(dummyData);

    return (
        <div className='container'>
            <h1 className='text-center'>List of Todos</h1>

            <div>

                <table className='table table-bordered table-striped'>

                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            todos.map(todo => 
                                <tr key={todo.todoId}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListTodoComponents