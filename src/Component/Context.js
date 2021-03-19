import React, { Component } from 'react'


const MyContext = React.createContext ();

export class MyProvider extends Component {

    state = {
        count: 0
    };
        incrementCount = () => {
            this.setState({
                count: this.state.count +1,
            });
        };

decrementCount = () => {
            this.setState({
                count: this.state.count -1,
            });
            };

 render() {
  return (
      <MyContext.Provider value={{...this.state,
      inc: this.incrementCount,
      dec: this.decrementCount
      }}>

            {this.props.children}
      </MyContext.Provider>
 
  )
 }
}
const MyConsumer= MyContext.Consumer;
export default MyConsumer;