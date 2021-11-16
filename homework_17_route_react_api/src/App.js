import './App.css';
import {Header} from './components/header/Header';
import {BackButton} from './components/back_button/BackButton';
import {Users} from './forms/users/Users';
import {UserPage} from './forms/user_page/UserPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';

function App() {
  return (
    <ThemeContextProvider>
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route path="/user/:id">
                        <BackButton/>
                    </Route>
                    <Route path="/">
                        <Header/>
                    </Route>
                </Switch>
                <div className="app-content">
                    <Switch>
                        <Route path="/home">
                            <Users/>
                        </Route>
                        <Route path="/user/:id">
                            <UserPage/>
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
