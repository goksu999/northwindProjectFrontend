import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css' //alt componentlerde etkılencek cunku app.js ana component yani css özellıklerınden dashboard da etkılencek.
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
//container dashboardı ortalar..

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
       <Dashboard></Dashboard>
      </Container>
        
      
       
    </div>
  );
}

export default App;
