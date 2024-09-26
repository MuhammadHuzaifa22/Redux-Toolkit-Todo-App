// yaha todos ki input form field or button bane ga

import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Config/Reducers/todoSlice';

const App = () => {
const dispatch = useDispatch();
let todoVal = useRef();

const selector = useSelector(state => state.todos.todosArray);
  console.log(selector);

function addToRedux(event){
    event.preventDefault();
    console.log('Function Checking...');
    dispatch(addTodo({
            inputValue: todoVal.current.value
          }))
}


  return (
    <>
<form className='flex flex-col jsutify-center w-[500px] mx-auto border-[1px] p-2 rounded-md items-center mt-5'>
    <input type="text"  placeholder='Enter Todos...' className='text-xl border-[1px] p-1 rounded-md w-full' ref={todoVal}/>
    <button className='text-xl border-[1px] rounded-md p-1 w-fit mt-2' onClick={addToRedux}>Add Todo</button>
</form>
    </>
  )
}

export default App