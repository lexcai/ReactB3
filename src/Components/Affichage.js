import React, {useState} from 'react';
import { Checkbox } from 'rsuite';

import Form from './Form'

const Affichage = () => {

    const [todos, setTodos] = useState([
        'Faire les courses',
        'Allez a la salle',
        'Appeler mamie'
    ])
const addTodo =text => {
    const newTodos = [...todos, text];
    setTodos(newTodos)
}
    return (
        <div>
            <Form addTodo={addTodo} />
            <ul>
            {todos.map((item, index) =>{
                return (
                    <li key={index}>
                        {item} <Checkbox/>

                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Affichage;