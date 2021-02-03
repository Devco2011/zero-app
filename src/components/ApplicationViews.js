import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './zero/Home';
import { NavBar } from './zero/NavBar';
import { Reduce } from './zero/Reduce';
import { Reuse } from './zero/Reuse';
import { Recycle } from './zero/Recycle';
import { Composte } from './zero/Compost';
import { ReduceLearn } from './zero/ReduceLearn';
import { ReuseLearn } from './zero/ReuseLearn';
import { RecycleLearn } from './zero/RecycleLearn';
import { ReduceResources } from './zero/ReduceResources';
import { ReuseResources } from './zero/ReuseResources';
import { RecycleResources } from './zero/RecycleResources';
import { ComposteLearn } from './zero/ComposteLearn';
import { ComposteResources } from './zero/ComposteResources';
import { Track } from './zero/Track';
import { Footer } from './zero/Footer';

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
        </>
    )
}


