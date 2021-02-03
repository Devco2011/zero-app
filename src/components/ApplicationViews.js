import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './zero/Home';
import { NavBar } from './zero/NavBar';
import { Reduce } from './zero/Reduce';
import { Reuse } from './zero/Reuse';
import { Recycle } from './zero/Recycle';
import { Compost } from './zero/Compost';
import { ReduceLearn } from './zero/ReduceLearn';
import { ReuseLearn } from './zero/ReuseLearn';
import { RecycleLearn } from './zero/RecycleLearn';
import { ReduceResources } from './zero/ReduceResources';
import { ReuseResources } from './zero/ReuseResources';
import { RecycleResources } from './zero/RecycleResources';
import { CompostLearn } from './zero/ComposteLearn';
import { CompostResources } from './zero/ComposteResources';
import { Track } from './zero/Track';
import { Footer } from './zero/Footer';

export const ApplicationViews = () => {
    return (
        <>

            <Switch>
                <Route exact path="/">
                    <NavBar />
                    <Home />
                </Route>
            </Switch>


            <Route path="/Reduce-Learn">
                <NavBar />
                <ReduceLearn />
            </Route>

            <Route path="/Reduce-Resources">
                <NavBar />
                <ReduceResources />
            </Route>

            <Route path="/Reuse-Learn">
                <NavBar />
                <ReuseLearn />
            </Route>

            <Route path="/Reuse-Resources">
                <NavBar />
                <ReuseResources />
            </Route>

            <Route path="/Recycle-Learn">
                <NavBar />
                <RecycleLearn />
            </Route>

            <Route path="/Recycle-Resources">
                <NavBar />
                <RecycleResources />
            </Route>

            <Route path="/Compost-Learn">
                <NavBar />
                <CompostLearn />
            </Route>

            <Route path="/Compost-Resources">
                <NavBar />
                <CompostResources />
            </Route>

            <Route path="/Track">
                <NavBar />
                <Track />
            </Route>
        </>
    )
}


