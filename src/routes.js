import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//paginas para a rota
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;