import React from "react";
import Home from "./component/Home"; 
import Couter1 from "./component/Couter1";
import Couter2 from "./component/Couter2";
import Couter3 from "./component/Couter3";
import Couter4 from "./component/Couter4";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/couter1' exact component={Couter1} />
                <Route path='/couter2' exact component={Couter2} />
                <Route path='/couter3' exact component={Couter3} />
                <Route path='/couter4' exact component={Couter4} />
            </Switch>

        </Router>

      </>
  );
}

export default App;
