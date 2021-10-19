import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/main/mainLay';
import BusinessCatPage from './pages/businessCatPage';
import SocialHandPage from './pages/socialHandPage';
import VerifyAccountPage from './pages/verifyAccountPage';
import './default.scss'

function App() {
  return (
    <div className="App">
      
     
      <Switch>
        <Route exact path="/" render={()=> (
          <MainLayout>
            <VerifyAccountPage />
          </MainLayout>
          )} 
        />
        <Route exact path="/business" render={()=> (
          <MainLayout>
            <BusinessCatPage />
          </MainLayout>
        )} 
        />
        <Route exact path="/social" render={()=> (
          <MainLayout>
            <SocialHandPage />
          </MainLayout>
        )} 
        />
        
      </Switch>
    </div>
  );
}

export default App;
