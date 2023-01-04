import React from 'react'
import './styles.css'
interface Props{
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=>void;
}

const InputField = ({todo, setTodo,handleAdd}: Props) => {
    const refContainer = React.useRef<HTMLInputElement>(null)

  return (
    <form action="#" className="input" 
        onSubmit={(e) => {
            handleAdd(e)
        refContainer.current?.blur()
        }}
    >
        <input  ref={refContainer} type="text" value={todo} onChange={
            (e)=>setTodo(e.target.value)
        } className='input_box' placeholder='Enter a task' />
        <button  className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField