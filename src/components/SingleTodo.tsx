import React from 'react'
import { Todo } from '../model';
import {MdDone} from 'react-icons/md'
import './styles.css'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
interface Props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({todo,todos,setTodos} : Props) => {
  return (
    <div>
        <form action="" className="todos_single">
            <span className="todos_single-text">
                {todo.todo}
            </span>
            <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon">
                    <AiFillDelete/>
                </span>
                <span className="icon">
                    <MdDone/>
                </span>
            </div>
        </form>
    </div>
  )
}

export default SingleTodo