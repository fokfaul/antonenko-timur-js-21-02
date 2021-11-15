import './App.css';
import {Header} from './components/header/Header';
import {Users} from './forms/users/Users';
import { ThemeContextProvider } from './contexts/ThemeContext';

import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';

function App() {
  return (
    <ThemeContextProvider>
        <HashRouter>
            <div className="App">
                <Header/>
                <div className="app-content">
                    <Switch>
                        <Route path="/home">
                            <Users/>
                        </Route>
                        <Route path="/user/:id">
                            "Пользователь"
                        </Route>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    </ThemeContextProvider>
  );
}

export default App;
