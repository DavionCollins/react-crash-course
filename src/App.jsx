import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      <Todo title="Finish Frontend Simplified"
      paragraph="Code along with frontend Simplified step by step"/>

      <Todo title="Finish the interview Section"
      paragraph="Finish every interview question in the next 6 weeks"/>

      <Todo title="Land a 100k Job"
      paragraph="Apply to 100 jobs"/>
      </div>
      <Modal title="Hello"/>
    </div>
  );
}

export default App;
