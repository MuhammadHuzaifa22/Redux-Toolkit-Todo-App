// yaha todos ki input form field or button bane ga

import React, { useRef, useState } from "react";

import { addTodo, editTodo, removeTodo } from "./Config/Reducers/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  let todoVal = useRef();

  const selector = useSelector((state) => state.todos.todosArray);
  console.log(selector);
  let [reverseMapping, setReverseMapping] = useState(false);

  function addToRedux(event) {
    event.preventDefault();
    if (todoVal.current.value === "") return;
    console.log("Function Checking...");
    dispatch(
      addTodo({
        inputValue: todoVal.current.value,
      })
    );
    todoVal.current.value = "";
  }

  function deleteTodo(index) {
    dispatch(
      removeTodo({
        index: index,
      })
    );
  }

  function updateTodo(index) {
    const newValue = prompt("Enter new value");
    if (newValue !== null && newValue.trim() !== "") {
      dispatch(
        editTodo({
          index: index,
          newValue: newValue,
        })
      );
    } else {
      alert("Invalid input. The value cannot be empty.");
    }
  }

  return (
    <>
      <form className="flex flex-col jsutify-center w-[500px] mx-auto border-[1px] p-2 rounded-md items-center mt-5 bg-[#75e675]">
        <h1 className="text-xl text-white mb-[10px] font-bold">
          Todo App With Redux Toolkit
        </h1>
        <input
          type="text"
          placeholder="Enter Todos..."
          className="text-xl border-[1px] p-1 rounded-md w-full"
          ref={todoVal}
        />
        <button
          className="text-md border-[1px] rounded-md p-1 w-fit mt-2 bg-blue-500 text-white hover:bg-blue-600 hover:border-[2px] border-white"
          onClick={addToRedux}
        >
          Add Todo
        </button>
      </form>
      {}

      {selector.length > 0 && <div className="justify-center mt-[20px] flex gap-[10px]">
        <button
          className={`p-[5px] border-[1px] border-white bg-blue-500 shadow-sm ${
            reverseMapping ? "border-[2px] border-black" : "border-[1px]"
          } shadow-white  hover:bg-blue-600 text-white rounded-md`}
          onClick={() => setReverseMapping(!reverseMapping ? true : true)}
        >
          Newest
        </button>
        <button
          className={`p-[5px] border-[1px] border-white bg-blue-500 shadow-sm  ${
            !reverseMapping ? "border-[2px] border-black" : "border-[1px]"
          } shadow-white hover:bg-blue-600 text-white rounded-md`}
          onClick={() => setReverseMapping(!reverseMapping ? false : false)}
        >
          Oldest
        </button>
      </div>}
     

      <ul className="mt-[50px] text-center">
        {selector.length > 0 ? (
          [...(reverseMapping ? [...selector].reverse() : selector)].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#75e675] text-start max-w-md mx-auto text-white list-none px-[5px] text-xl my-[5px] py-[5px] rounded-md"
                >
                  <li>
                    {item.title}
                    <button
                      className="border-[1px] border-white  text-sm rounded-md ml-2 bg-red-500 p-[2px] hover:bg-red-600 hover:border-[2px]"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="border-[1px] border-white rounded-md text-sm ml-2 bg-blue-500 p-[2px] hover:border-[2px] hover:bg-blue-600"
                      onClick={() => updateTodo(index)}
                    >
                      Edit
                    </button>
                  </li>
                </div>
              );
            }
          )
        ) : (
          <span className="text-center text-2xl font-bold text-red-500">
            No data found.
          </span>
        )}
      </ul>
    </>
  );
};

export default App;
