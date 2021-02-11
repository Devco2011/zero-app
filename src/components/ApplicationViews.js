import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './fbAuth/FirebaseProvider';
import { Home } from './zero/Home';
import { Login } from './fbAuth/Login';
import { Register } from './fbAuth/Register';
import { NavBar } from './zero/NavBar';
import { ReduceLearn } from './zero/ReduceLearn';
import { ReuseLearn } from './zero/ReuseLearn';
import { RecycleLearn } from './zero/RecycleLearn';
import { ReduceResources } from './zero/ReduceResources';
import { ReuseResources } from './zero/ReuseResources';
import { RecycleResources } from './zero/RecycleResources';
import { CompostLearn } from './zero/ComposteLearn';
import { CompostResources } from './zero/ComposteResources';
import { Track } from './zero/Track';
import { BathPersonal } from './zero/BathPersonal';
import { Household } from './zero/HouseHold';
import { Drink } from './zero/Drink';
import { Footer } from './zero/Footer';


export const ApplicationViews = () => {
    const { isLoggedIn } = useContext(FirebaseContext)
    return (
        <>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>


                <Route exact path="/Reduce-Learn">

                    <ReduceLearn />
                </Route>

                <Route path="/Reduce-Resources">

                    <ReduceResources />
                </Route>

                <Route path="/Reduce-Bath-Personal">

                    <BathPersonal />

                </Route><Route path="/Reduce-Household-Kitchen-Cleaning">

                    <Household />
                </Route>

                <Route path="/Reduce-For-Drinkers">

                    <Drink />
                </Route>

                <Route path="/Reuse-Learn">

                    <ReuseLearn />
                </Route>

                <Route path="/Reuse-Resources">

                    <ReuseResources />
                </Route>

                <Route path="/Recycle-Learn">

                    <RecycleLearn />
                </Route>

                <Route path="/Recycle-Resources">

                    <RecycleResources />
                </Route>

                <Route path="/Compost-Learn">

                    <CompostLearn />
                </Route>

                <Route path="/Compost-Resources">

                    <CompostResources />
                </Route>


                <Route path="/Track">
                    {isLoggedIn ? <Track /> : <Redirect to="/login" />}
                </Route>


                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </>
    )
}


