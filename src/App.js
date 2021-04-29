import Home from './Home';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
};

export default App;
