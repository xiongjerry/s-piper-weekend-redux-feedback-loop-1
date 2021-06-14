import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import Feeling1 from '../Feeling1/Feeling1';
import Understand2 from '../Understanding2/Understanding2';
import Supported3 from '../Supported3/Supported3';
import Comments4 from '../Comments4/Comments4';
import Review5 from '../Review5/Review5';
import Thanks6 from '../Thanks6/Thanks6';
import Admin from '../Admin/Admin';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffee58',
      dark: '#c9bs1f',
      light: '#ffff8b',
      contrastText: '#000000',
    },
    secondary: {
      main: '#90a4ae',
      dark: '#62757f',
      light: '#c1d5e0',
      contrastText: '#000000'
    }
  }
})

function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* Sets up the routing for our various parts of the form */}
        <Router>
          <div className='App'>

            <Route path='/' exact>
              <Feeling1 />
            </Route >

            <Route path='/understand2'>
              <Understand2 />
            </Route >

            <Route path='/supported3'>
              <Supported3 />
            </Route >

            <Route path='/comments4'>
              <Comments4 />
            </Route>

            <Route path='/review5'>
              <Review5 />
            </Route>

            <Route path='/thanks6'>
              <Thanks6 />
            </Route>

            <Route path='/admin'>
              <Admin />
            </Route>

          </div>
        </Router>

      </div>
    </ThemeProvider>

  );
}

export default App;
