import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector, useDispatch } from 'react-redux'


function App() {

  const todos = useSelector(state => state.todos)
  
  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 from-10% via-purple-800 via-40% to-purple-900 to-90% ... min-h-screen py-8">
                <div className="w-[90%] max-w-lg mx-auto shadow-md bg-white rounded-lg px-4 py-3 ">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">To-Do List</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <AddTodo />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todos todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* {console.log(todos)} */}
    </>
  )
}

export default App