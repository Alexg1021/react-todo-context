import { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';

const Home = () => {
  const { todos, addTodo } = useContext(GlobalContext);
  const [todo, setTodo] = useState({ item: '', completed: false });

  const handleChange = todoItem => {
    setTodo({ ...todo, item: todoItem });
  };

  const updateTodos = () => {
    // debugger;
    //   send my todo object to global context to save inside of todos arr
    addTodo(todo);
    // reset my todo object
    setTodo({ item: '', completed: false });
  };
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Add your todo item...'
              value={todo.item}
              onChange={e => handleChange(e.target.value)}
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-primary' onClick={updateTodos}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {todos.map((todo, index) => {
              return (
                <li className='list-group-item' key={index}>
                  {todo.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
