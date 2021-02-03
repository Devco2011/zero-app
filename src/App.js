import { Route } from 'react-router-dom';
import { NavBar } from './components/zero/NavBar';
import { ApplicationViews } from './components/ApplicationViews';

function App() {
  return (
    <Route>
      <ApplicationViews />
    </Route>
  );
}

export default App;
