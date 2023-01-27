import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanageMap from './pages/OrphanageMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanageMap} />

                <Route path="/orphanages/create" exact component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;