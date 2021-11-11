import './App.css';
import {Header} from './components/header/Header';
import {Users} from './forms/users/Users';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
        <div className="App">
            <Header/>
            <Users/>
        </div>
    </ThemeContextProvider>
  );
}

export default App;
