
import React, { Component } from 'react'

import {MyProvider} from "./Context"
import Class from "./Class"

export default class App extends Component {
 render() {
  return (
   <MyProvider>
    <div>
         <Class/>
    </div>
 
   </MyProvider>
  )
 }
}
