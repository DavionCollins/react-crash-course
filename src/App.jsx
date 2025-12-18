import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/modal.jsx'
import React, { useState } from 'react'

function App() {
  
const [showModal, setShowModal] = useState(false)

function onTodoDelete() {
  setShowModal(true)
}

function modalCancel() {
  setShowModal(false)
}

function modalConfirm() {
  setShowModal(false)
}

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log('2')
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>

      <div className='todo__wrapper'>
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>

      <Todo onTodoDelete={onTodoDelete} title="Finish the interview Section"/>

      <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job"/>
      </div>
      {showModal ? <Modal modalCancel={modalCancel} modalConfirm={modalConfirm} title="Are you sure ?"/> : null}
    </div>
  );
}

export default App;
