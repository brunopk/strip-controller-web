import {Switch, Route} from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from "./components/login";

function App() {

    document.body.classList.add('text-center');

    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact
                <Route path="/contact/:id">
                    <Contact />
                </Route>
                <Route path="/contact">
                    <AllContacts />
                </Route>*/

                /* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
  );
}

export default App;
