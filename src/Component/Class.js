import React, { Component } from 'react'
import MyConsumer from './Context'

class Class extends Component {
 render() {
  return (
   <MyConsumer>
        {(value) => {
         return(
          <div>
          <div>{value.count}</div>
          <button onClick={value.inc}>Increment</button>
          <button onClick={value.dec}>Decrement</button>
          </div>
         )
         
    }}
   </MyConsumer>
  )
 }
}
export default Class;