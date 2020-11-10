import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import injectContext from './store/appContext';
import { AddContact } from './views/AddContact';
import { Contacts } from './views/Contacts';
import Home from './views/home';
import NotFound from './views/notfound';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/edit" component={AddContact} />
        <Route exact path="/add" component={AddContact} />
        <Route exact path="/contacts/:id/:name" component={Contacts} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);