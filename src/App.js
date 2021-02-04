import { Route } from 'react-router-dom';
import { NavBar } from './components/zero/NavBar';
import { ApplicationViews } from './components/ApplicationViews';
import { FirebaseProvider } from './components/fbAuth/FirebaseProvider';

function App() {
  return (
    <Route>
      <FirebaseProvider>
        <NavBar />
        <ApplicationViews />
      </FirebaseProvider>
    </Route>
  );
}

export default App;
