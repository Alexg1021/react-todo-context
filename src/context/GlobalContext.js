// import react components
import { createContext, useState } from 'react';

// create or initialize our context
export const GlobalContext = createContext();

// mock data to reference for
let mockTodos = [
  { item: 'read a book', completed: false },
  { item: 'sing in the rain', completed: true },
];

// create a context provider
export const GlobalProvider = ({ children }) => {
  //   const [todo, setTodo] = useState({ item: '', completed: false });
  const [todos, setTodos] = useState(mockTodos);
  //   const [state, dispatch] = useReducer(someReducer, initialState);

  //   this method is now being handled in local home component, no longer global
  //   const handleChange = todoItem => {
  //     console.log(todoItem);
  //     // debugger;
  //     setTodo({ ...todo, item: todoItem });
  //   };

  const addTodo = todo => {
    //   take the todo item
    // push it into our todos array
    setTodos([...todos, todo]);
  };

  return (
    <GlobalContext.Provider value={{ todos, addTodo }}>
      {children}
    </GlobalContext.Provider>
  );
};

// *note: to access context inside of components,
// will need to use react hooks: useContext(passInContext)
