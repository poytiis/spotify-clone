import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        
      </div>

      <Switch>
          <Route path="/viimeaikaiset">
            <Layout component= "lastPlayed"></Layout>
          </Route>
          <Route path="/login">
            <Layout></Layout>
          </Route>
          <Route  path="/haut">
          <Layout component= "searchList"></Layout>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
