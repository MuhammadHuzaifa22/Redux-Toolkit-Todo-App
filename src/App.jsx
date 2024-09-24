// yaha todos ki input form field or button bane ga

import React from 'react'
import { useDispatch } from 'react-redux';

const App = () => {
// const dispatch = useDispatch();

function addToRedux(event){
    event.preventDefault();
    console.log('Function Checking...');
    // dispatch(addTodo({
    //         title: todoVal.current.value
    //       }))
}


  return (
    <>
<form className='flex flex-col jsutify-center w-[500px] mx-auto border-[1px] p-2 rounded-md items-center mt-5'>
    <input type="text"  placeholder='Enter Todos...' className='text-xl border-[1px] p-1 rounded-md w-full'/>
    <button className='text-xl border-[1px] rounded-md p-1 w-fit mt-2' onClick={addToRedux}>Add Todo</button>
</form>
    </>
  )
}

export default App