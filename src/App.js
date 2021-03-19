import React, { Component } from 'react'
import Nav from "./Nav"
import Body from "./Body"
import Home from "./Home"
import ShowApi from "./ShowApi"

import {BrowserRouter as Router, Route,} from "react-router-dom"

// Parent Component

 class App extends Component {

    render() {
      
        return (

          <Router>
    <div>
            <Nav />
            
      
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Body} />
          <Route path="/show" component={ShowApi} />
  
      
    </div>
      </Router>
    
        )
    }
}

export default App;
