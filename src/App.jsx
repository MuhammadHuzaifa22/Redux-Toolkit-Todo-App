// yaha todos ki input form field or button bane ga

import React, { useRef } from 'react'

import { addTodo, removeTodo } from './Config/Reducers/todoSlice';
import { useDispatch,useSelector } from 'react-redux';

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


function deleteTodo(index){
dispatch(removeTodo({
  index:index
}))
}


  return (
    <>
<form className='flex flex-col jsutify-center w-[500px] mx-auto border-[1px] p-2 rounded-md items-center mt-5'>
    <input type="text"  placeholder='Enter Todos...' className='text-xl border-[1px] p-1 rounded-md w-full' ref={todoVal}/>
    <button className='text-xl border-[1px] rounded-md p-1 w-fit mt-2' onClick={addToRedux}>Add Todo</button>
</form>
{selector.length > 0 ? selector.map((item,index)=>{
  return <div key={index}>
    <li>{item.title}<button className='border-[1px] border-primary ml-2' onClick={() =>deleteTodo(index)}>Delete</button></li>
  </div>
}):<h1>No data found.</h1>}
    </>
  )
}

export default App