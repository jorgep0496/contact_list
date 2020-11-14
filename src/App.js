import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import injectContext from "./store/appContext.js";
import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/editContact.js";
import NotFound from './views/notfound.js';

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/:id/edit" component={EditContact} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);


/*
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import injectContext from './store/appContext';
import { AddContact } from './views/AddContacts';
import { Contacts } from './views/Contacts';
import { EditContact } from './views/editContact';
import NotFound from './views/notfound';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/index.html" component={Contacts} />
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/add" component={AddContact} />
          <Route exact path="/id:edit" component={EditContact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  )
}

export default injectContext(App);
*/